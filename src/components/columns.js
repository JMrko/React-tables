import { format } from 'date-fns'
import { SelectColumnFilter} from './SelectColumnFilter'

export const COLUMNAS = [
  {
    Header: 'ID',
    accessor: 'carid',
    disableFilters: true,
  },
  {
    Header: 'tcanombre',
    accessor: 'tcanombre',
    aggregate: 'uniqueCount',
    Filter: SelectColumnFilter,
    Aggregated: ({ value }) => `${value} Unique tcanombre`,
  },
  {
    Header: 'usuusuario',
    accessor: 'usuusuario',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique usuusuario`,
  },
  {
    Header: 'carnombrearchivo',
    accessor: 'carnombrearchivo',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique carnombrearchivo`,
  },
  {
    Header: 'carubicacion',
    accessor: 'carubicacion',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique carubicacion`,
  },
  {
    Header: 'carexito',
    accessor: 'carexito',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique carexito`,
  },
  {
    Header: 'carurl',
    accessor: 'carurl',
    aggregate: 'average',
    Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (carurl)`,
  },
  {
    Header: 'created_at',
    accessor: 'created_at',
    aggregate: 'uniqueCount',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
    Aggregated: ({ value }) => `${value} Unique created_at`,
  }
]

