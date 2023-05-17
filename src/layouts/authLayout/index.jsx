import { connect } from 'react-redux';
import AuthLayout from './AuthLayout';

const mapStateToProps = ({ user: { user } }) => ({ user });

export default connect(mapStateToProps)(AuthLayout)