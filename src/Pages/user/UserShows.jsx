import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../App";
import Grid from '@mui/material/Grid'
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";


export default function UserShows() {

  const { data } = useContext(DataContext);

    const [sortOrder, setSortOrder] = useState(null);
    const [originalData, setOriginalData] = useState([]);

    const [filteredItems, setFilteredItems] = useState(originalData);

    const handleSearch = (searchText) => {

      if (!searchText) {

        setFilteredItems(originalData);

      } else {

        const filtered = originalData.filter((show) =>

          show.title.toLowerCase().includes(searchText.toLowerCase())

        );

        setFilteredItems(filtered);

      }

    };
    
  
    useEffect(() => {
        
        setOriginalData(data);
        setFilteredItems(data)

    }, [data]);

    const userShows = filteredItems.map(show => {

        return (

        <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
            
                <Card show={show}/>
            
        </Grid>

        )

    })

    const handleSort = (sortOrder) => {

      setSortOrder(sortOrder);
    
      if (sortOrder === '[A-Z]') {

        setFilteredItems([...filteredItems].sort((a, b) => a.title.localeCompare(b.title)));

      } else if (sortOrder === '[Z-A]') {

        setFilteredItems([...filteredItems].sort((a, b) => b.title.localeCompare(a.title)));

      } else if(sortOrder === 'Oldest') {
        
        setFilteredItems([...filteredItems].sort((a, b) => a.updated.localeCompare(b.updated)));

      } else if (sortOrder === 'Recent') {

        setFilteredItems([...filteredItems].sort((a, b) => b.updated.localeCompare(a.updated)));

      } else {

        setFilteredItems([...originalData]);

      }
      
    };

    const DropdownMenu = ({ handleSort, sortOrder }) => {

        const [anchorEl, setAnchorEl] = useState(null);
      
        const handleClick = (event) => {
      
          setAnchorEl(event.currentTarget);
      
        };
      
        const handleClose = () => {
      
          setAnchorEl(null);
      
        };
      
        const handleSortOption= (sortOrder) => {
      
          handleSort(sortOrder);
          handleClose();
          
        };
      
        return (
      
          <div>
      
            <Button sx={{ background: '#875b31', '&:hover': { background: '#57391C' } }} aria-controls="simple-menu" aria-haspopup="true" variant="contained" onClick={handleClick}>

              Sort {sortOrder === '[A-Z]' ? 'Ascending' : sortOrder === '[Z-A]' ? 'Descending' : sortOrder === 'Recent' ? 'Recent' : sortOrder === 'Oldest' ? 'Oldest' : null} <ArrowDropDown/>

            </Button>

      
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      
              <MenuItem onClick={ () => handleSortOption ('[A-Z]')}> Ascending </MenuItem>
      
              <MenuItem onClick={ () => handleSortOption('[Z-A]')}> Descending </MenuItem>

              <MenuItem onClick={ () => handleSortOption('Recent')}> Recent </MenuItem>

              <MenuItem onClick={ () => handleSortOption('Oldest')}> Oldest </MenuItem>
      
              <MenuItem onClick={ () => handleSortOption('none')}> None </MenuItem>
      
            </Menu>
      
          </div>
      
        );
      
    };
  

    return (

        <div style={{padding:'2% 10%'}}>
        
            <h1 className="user-shows-title" style={{marginBottom: '5%'}}>Your Shows</h1>

            

            <div id='searchDiv' style={{}}>

                <DropdownMenu handleSort={handleSort} sortOrder={sortOrder}/>
                <SearchBar onSearch ={handleSearch} />

            </div>

            <Grid container spacing={5}>

                {userShows}
            
            </Grid>

        </div>
        
    )
}