function Joke({ joke }) {
  return (
    <div className="mb-4">
      <div className="alert alert-warning text-center" role="alert">
        <strong>😂 Chuck Norris Joke:</strong>
        <br />
        <span>{joke}</span>
      </div>
    </div>
  );
}

export default Joke;
