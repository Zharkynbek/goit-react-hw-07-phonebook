import Phonebook from "./components/Phonebook/Phonebook";
import Loader from "./loader/loader";
import { connect } from "react-redux";

function App({ isLoading }) {
  return (
    <div>
      {isLoading && <Loader />}
      <Phonebook />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});

export default connect(mapStateToProps)(App);
