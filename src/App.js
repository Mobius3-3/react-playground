import React from 'react';

function App() {
  return (
    <>
      <h1>Example Counter</h1>
      <>
        <>
          <h2>CounterV1</h2>
          <CounterV1 />
        </>
        <>
          <h2>CounterV2</h2>
          <CounterV2 />
        </>
        <>
          <h2>CounterV3</h2>
          <CounterV3 />
        </>        
      </>
      <h1>Example: Greet Users</h1>
      <UserProvider>
        <GreetUser />
      </UserProvider>
    </>
  );
}

function CounterV1() {
  const [count, setCounter] = React.useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button
        onClick={() => setCounter(count + 1)}
      >
        Increment
      </button>
    </main>
  );
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className="prefix">
        Count:
      </span>
      {count}
    </p>
  );
}

function CounterV2() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      {/* 👇 This fella is new 👇 */}
      <DecorationV2 />
    </main>
  );
}

function DecorationV2() {
  return (
    <div className="decoration">
      ❤️
    </div>
  );
}

function CounterV3() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      {/* 👇 This fella is new 👇 */}
      <DecorationV3 />
    </main>
  );
}

const DecorationV3 = React.memo(() => {
  return (
    <div className="decoration">
      ❤️
    </div>
  );
});

const userContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    window.setTimeout(() => {
      setUser( { name: 'John'} );
    }, 8000);
  }, []);

  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  );
};

function GreetUser() {
  const user = React.useContext(userContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      Hello, {user.name}!
    </p>
  );
}

export default App;