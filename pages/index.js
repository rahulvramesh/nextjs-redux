import { connect } from 'react-redux';
import initialize from '../utils/initialize';

const Index = () => (
    <div>
        <h2 className="title is-2">Authentication with Next.js using JWT and Redux</h2>
        <p>
            A demonstrating app of Next.js application using JWT with Redux.
        </p>
      </div>
  );
  
  Index.getInitialProps = function(ctx) {
    initialize(ctx);
  };
  
  export default connect(state => state)(Index);