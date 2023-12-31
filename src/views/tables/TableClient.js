// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 27,
    status: 'privato',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '€19.586,23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Assistente alle risorse umane'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '€23.896,35',
    status: 'professionista',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Ingegnere'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'società',
    salary: '€18.991,67',
    email: 'ediehn6@163.com',
    designation: 'Specialista ambientale'
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'Impresa',
    salary: '€19.252,12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Rappresentante di commercio'
  },
  {
    age: 66,
    status: 'collaboratore',
    date: '03/24/2018',
    salary: '€13.076,28',
    name: 'Annie Martin',
    designation: 'Operatore',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '€10.909,52',
    name: 'Adeline Day',
    status: 'professionista',
    email: 'hnisius4@gnu.org',
    designation: 'Esperto Contabile'
  },
  {
    age: 61,
    status: 'privato',
    date: '06/01/2017',
    salary: '€17.803,80',
    name: 'Lora Jackson',
    designation: 'Geologo',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '€12.336,17',
    name: 'Rodney Sharp',
    status: 'professionista',
    designation: 'Ragioniere',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj = {
  collaboratore: { color: 'info' },
  società: { color: 'error' },
  privato: { color: 'primary' },
  Impresa: { color: 'warning' },
  professionista: { color: 'success' }
}

const TableClient = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Denominazione</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Data inserimento</TableCell>
              <TableCell>Totale Fatturato</TableCell>
              <TableCell>N° dipendenti</TableCell>
              <TableCell>Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default TableClient
