import UserCard from "./components/01_RequiredOptionalProps";
import { GreetA } from "./components/02_DefaultProps";
import { Panel, Panel2 } from "./components/03_ChildrenReactNode";
import { Badge } from "./components/04_AsConstVariable";
import { Button } from "./components/05_ComponentProps";
import { Counter } from "./components/06_State";
import { TypeReducer } from "./components/08_TypedUseReducer";
import { UncontrolledForm } from "./components/09_UncontrolledFrom";

const App = () => {
  return (
    <>
      {/* <UserCard
        id="u1"
        name="Imtiaz"
        subtitle={<span>🚀 Software Engineer</span>}
      /> */}

      {/* <GreetA />
      <GreetA name="Imtiaz" /> */}

      {/* <Panel
        title="Panel"
        children={
          <ul>
            <li>Item 1</li>
          </ul>
        }
      /> */}

      {/*<Panel2 title="Panel 2" chindren={<em>No Children Present!</em>} /> */}

      {/* <Badge label="Badge" variant="secondary" /> */}

      {/* <Button variant="primary" onClick={() => alert("clicked")}>
        Text
      </Button> */}

      {/* <Counter /> */}

      {/* <TypeReducer /> */}

      <UncontrolledForm />
    </>
  );
};

export default App;
