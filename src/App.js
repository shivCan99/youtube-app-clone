import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar,Sidebar ,ChannelDetail, VideoDetail, Feed,SearchFeed } from "./components";
const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#FCF6F6'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id"  element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App