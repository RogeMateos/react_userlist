import UsersList from './components/UsersList';
const USERS = [
	{
		name: 'Pablo Castellanos',
		active: true,
		role: 'teacher'
	},
	{
		name: 'jose Miguel',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Roge Mateos',
		active: false,
		role: 'student'
	}
];

const App = () => <UsersList users={USERS} />;
export default App;
