import withAuth from '../utils/withAuth';
export default withAuth(function Reports(){ return (<div className='p-6'><h1 className='text-2xl font-bold text-gold-600 mb-4'>Reports</h1><div className='bg-white p-6 rounded-2xl shadow'>Content for Reports page.</div></div>); }, ['Admin','Doctor','Nurse']);
