// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import Table from 'src/views/dashboard/Table'
import { CardContent } from '@mui/material'
import TableClient from 'src/views/tables/TableClient'

const Clienti = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          {/*<Link href='/pages/clienti/' target='_blank'>*/}
          <Link href='#' target='_self'>
            Anagrafica Clienti
          </Link>
        </Typography>
        <Typography variant='body2'>Elenco Clienti registrati sulla piattaforma</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          {/*<CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />*/}
          {/*<CardHeader title='Lista Utenti' titleTypographyProps={{ variant: 'h6' }} />*/}
          <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          
          <Button variant='contained' href='/clienti/nuovo-cliente'>Nuovo Cliente</Button>
        </Box>
        <TableClient />
      </CardContent>
        </Card>
        
      </Grid>
      {/*<Grid item xs={12}>
        <Card>
          <CardHeader title='Dense Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableDense />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCollapsible />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Spanning Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableSpanning />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Customized Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCustomized />
        </Card>
      </Grid>*/}
    </Grid>
  )
}

export default Clienti
