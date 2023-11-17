function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
}

function MultiWelcome() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
          </div>
        );
      }

export default MultiWelcome;
