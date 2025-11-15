//Pogono Clock is a small desktop clock widget for use with Übersicht. 

// Command to get current date and time in Swedish locale
// LC_TIME ensures Swedish names; format: weekday, day, month, year, 24h:minute:second
export const command = "LC_TIME=sv_SE.UTF-8 date '+%A %d %B %Y %H:%M:%S'"

// Refresh every 1000ms (1 second)
export const refreshFrequency = 1000

//This shortens the weekdays to the correct Swedish short forms.
const WEEKDAY_SHORT = {
  "måndag": "MÅN", 
  "tisdag": "TIS", 
  "onsdag": "ONS",
  "torsdag": "TORS", 
  "fredag": "FRE", 
  "lördag": "LÖR", 
  "söndag": "SÖN"
}

//This shortens the names of all months to the correct Swedish short forms.
const MONTH_SHORT = {
  "januari": "JAN", 
  "februari": "FEB", 
  "mars": "MARS", 
  "april": "APRIL",
  "maj": "MAJ", 
  "juni": "JUNI", 
  "juli": "JULI", 
  "augusti": "AUG",
  "september": "SEPT", 
  "oktober": "OKT", 
  "november": "NOV", 
  "december": "DEC"
}

// The different elements are split so I can style the colons. 
// Months and weekdays are written in lowercase in Swedish.
export const render = ({ output }) => {
  const [weekdayRaw, day, monthRaw, year, time] = output.split(' ')
  const weekday = WEEKDAY_SHORT[weekdayRaw.toLowerCase()] || weekdayRaw.toUpperCase()
  const month = MONTH_SHORT[monthRaw.toLowerCase()] || monthRaw.toUpperCase()
  const [hours, minutes, seconds] = time.split(':')

  return (
// Inline styling seems to work better with Übersicht.
    <div style={{
/* Layout */
display: 'inline-block', // Allows padding and margin while staying inline

/* Box styling */
padding: '4px 8px',       // Space inside the box
borderRadius: '8px',      // Rounded corners
backgroundColor: 'hsla(0,0%,30%,1)', // Box background color

/* Typography */
fontFamily: 'Menlo',      // Monospaced font
fontSize: '11px',         // Small text size
letterSpacing: '1px',     // Space between letters
wordSpacing: '-0.5ch',    // Slightly reduce word spacing
color: 'rgba(255,255,0,1)', // Text color (yellow)
textAlign: 'center',      // Center text horizontally

/* Position */
position: 'fixed',        // Fixes element on the screen
bottom: '8px',            // Distance from bottom
right: '50px',            // Distance from right

    }}>
      <span>{weekday}</span> <span>{day}</span> <span>{month}</span> <span>{year}</span> <span>{hours}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{minutes}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{seconds}</span>
    </div>
  )
}
