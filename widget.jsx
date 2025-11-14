export const command = "LC_TIME=sv_SE.UTF-8 date '+%A %d %B %Y %H:%M:%S'"
export const refreshFrequency = 1000

const WEEKDAY = {
  "måndag": "MÅN", "tisdag": "TIS", "onsdag": "ONS",
  "torsdag": "TORS", "fredag": "FRE", "lördag": "LÖR", "söndag": "SÖN"
}

const MONTH = {
  "januari": "JAN", "februari": "FEB", "mars": "MARS", "april": "APRIL",
  "maj": "MAJ", "juni": "JUNI", "juli": "JULI", "augusti": "AUG",
  "september": "SEPT", "oktober": "OKT", "november": "NOV", "december": "DEC"
}

export const render = ({ output }) => {
  const [weekdayStr, day, monthStr, year, time] = output.split(' ')
  const weekday = WEEKDAY[weekdayStr.toLowerCase()] || weekdayStr.toUpperCase()
  const month = MONTH[monthStr.toLowerCase()] || monthStr.toUpperCase()
  const [hours, minutes, seconds] = time.split(':')

  return (
    <div style={{
      display: 'inline-block',
      backgroundColor: 'hsla(0,0%,30%,1)',
      padding: '4px 8px',
      borderRadius: '8px',
      fontFamily: 'Menlo',
      fontSize: '11px',
      letterSpacing: '1px',
      wordSpacing: '-0.5ch',
      fontWeight: 'normal',
      color: 'rgba(255,255,0,1)',
      textAlign: 'center',
      position: 'fixed',
      bottom: '8px',
      right: '50px'
    }}>
      <span>{weekday}</span> <span>{day}</span> <span>{month}</span> <span>{year}</span> <span>{hours}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{minutes}</span>
      <span style={{ position: 'relative', top: '-1px' }}>:</span>
      <span>{seconds}</span>
    </div>
  )
}
