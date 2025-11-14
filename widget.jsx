//This is a small clock for use with Übersicht widget. 
export const command = "LC_TIME=sv_SE.UTF-8 date '+%A %d %B %Y %H:%M:%S'"
export const refreshFrequency = 1000

//This shortens the weekdays to the correct Swedis short forms.
const WEEKDAY = {
  "måndag": "MÅN", "tisdag": "TIS", "onsdag": "ONS",
  "torsdag": "TORS", "fredag": "FRE", "lördag": "LÖR", "söndag": "SÖN"
}

//This shortens the namnes of all months to the correct Swedish short form.
const MONTH = {
  "januari": "JAN", "februari": "FEB", "mars": "MARS", "april": "APRIL",
  "maj": "MAJ", "juni": "JUNI", "juli": "JULI", "augusti": "AUG",
  "september": "SEPT", "oktober": "OKT", "november": "NOV", "december": "DEC"
}
//The different elements are splitted so I can style the colons. Months and weekdays is with lower case in Swedish.
export const render = ({ output }) => {
  const [weekdayStr, day, monthStr, year, time] = output.split(' ')
  const weekday = WEEKDAY[weekdayStr.toLowerCase()] || weekdayStr.toUpperCase()
  const month = MONTH[monthStr.toLowerCase()] || monthStr.toUpperCase()
  const [hours, minutes, seconds] = time.split(':')

  return (
    //Inline styling seem to work better with Übersicht.
    <div style={{
      display: 'inline-block',
      backgroundColor: 'hsla(0,0%,30%,1)',//Box colour
      padding: '4px 8px',
      borderRadius: '8px',//Box corners
      fontFamily: 'Menlo',//A nice mono spaced font
      fontSize: '11px',//Small text
      letterSpacing: '1px', //Easier to glance
      wordSpacing: '-0.5ch',//The word spacing is made smaller
      fontWeight: 'normal',
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
