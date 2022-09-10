import { Backdrop, Fab } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  return (
    <div>
      <Backdrop>
      <Container fixed>
        <Fab color="primary" aria-label="add">
          +
        </Fab>
      </Container>
      </Backdrop>
      
    </div>
  )
}

export default App;
