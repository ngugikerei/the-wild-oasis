import  TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'

export default function CabinTableOperations() {
  return (
   <TableOperations>
    <Filter filterField= 'discount' options={[
      {value: 'all', label:'All'} ,
      {value: 'no-discount', label:'No Discount'},
      {value: 'with-discount', label:'With Discount'}

    ]}/>


    <SortBy options={[
      
      {value: 'name-asc', label:'Sort by Name (A-Z)' },
      {value: 'name-desc', label:'Sort by Name (Z-A)' },
      {value: 'regularPrice-asc', label:'Sort by Price (Low-High)' },
      {value: 'regularPrice-desc', label:'Sort by Price (High-Low)' },
      {value: 'maxCapacity-asc', label:'Sort by Capacity (Low-High)' },
      {value: 'maxCapacity-desc', label:'Sort by Capacity (High-Low)' }
      
      ]}/>




   </TableOperations>
  )
}
