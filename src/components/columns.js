import { format } from 'date-fns'
import { SelectColumnFilter} from './SelectColumnFilter'

export const COLUMN_GROUP2 = [
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

export const COLUMN_GROUP = [
  {
    Header: 'First Name',
    accessor: 'first_name',
    aggregate: 'count',
    Filter: SelectColumnFilter,
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique Names`,
  },
  {
    Header: 'Email',
    accessor: 'email',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique Emails`,
  },
  {
    Header: 'Date Birth',
    accessor: 'date_of_birth',
    aggregate: 'uniqueCount',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    },
    Aggregated: ({ value }) => `${value} Unique Births`,
  },
  {
    Header: 'Country',
    accessor: 'country',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique countries`,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Unique phones`,
  },
  {
    Header: 'Age',
    accessor: 'age',
    aggregate: 'average',
    Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
  },
]
export const COLUMN_ROW = [
  {
    Header: () => null,
    id: 'expander', 
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>  
        {row.isExpanded ? '👇' : '👉'}
      </span>
    ),
    SubCell: () => null 
  },
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: (d) => d.first_name,
        SubCell: (cellProps) => (
          <> {cellProps.value} </>
        ),
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Last Name',
        accessor: (d) => d.last_name
      }
    ]
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: ' Email',
        accessor: (d) => d.email
      },
      {
        Header: 'Date of Birth',
        accessor: (d) => d.date_of_birth,
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy')
        }
      },
      {
        Header: 'Country',
        accessor: (d) => d.country
      },
      {
        Header: 'Phone',
        accessor: (d) => d.phone
      },
      {
        Header: 'Email',
        accessor: (d) => d.email
      },
      {
        Header: 'Age',
        accessor: (d) => d.age
      }
    ]
  }
]

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age'
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
