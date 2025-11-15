//Pogono Clock is a small clock widget for use with Übersicht. 
export const command = "LC_TIME=sv_SE.UTF-8 date '+%A %d %B %Y %H:%M:%S'"
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

//This shortens the nanes of all months to the correct Swedish short forms.
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
export const render = ({ dateString }) => {
  const [weekdayRaw, day, monthRaw, year, time] = dateString.split(' ')
  const weekday = WEEKDAY_SHORT[weekdayRaw.toLowerCase()] || weekdayRaw.toUpperCase()
  const month = MONTH_SHORT[monthRaw.toLowerCase()] || monthRaw.toUpperCase()
  const [hours, minutes, seconds] = time.split(':')

  return (
// Inline styling seems to work better with Übersicht.
    <div style={{
      display: 'inline-block',
      backgroundColor: 'hsla(0,0%,30%,1)',//Box colour
      padding: '4px 8px',
      borderRadius: '8px',//Box corners
      fontFamily: 'Menlo',//A nice mono spaced font
      fontSize: '11px',//Small text
      letterSpacing: '1px', //Easier to glance
      wordSpacing: '-0.5ch',//The word spacing is made smaller
      color: 'rgba(255,255,0,1)',//Text colour
      textAlign: 'center',
      position: 'fixed',
      bottom: '8px',//This is placement on the screen
      right: '50px'//This is placement on the screen
    }}>
      <span>{weekday}</span> <span>{day}</span> <span>{month}</span> <span>{year}</span> <span>{hours}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{minutes}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{seconds}</span>
    </div>
  )
}
