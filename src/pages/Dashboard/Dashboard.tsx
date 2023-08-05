import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import dashboardImage from '../../assets/images/dashboard.jpg';
import { notify } from '../../App';
import { useAuth } from '../../contexts/UserContext/UserContext';
import { CircleLoader } from '../../components';

const Dashboard: React.FC = () => {
  const { user, setAuthenticatedUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  interface User {
    name: string;
  }

  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        'https://cutly.onrender.com/api/v1/users/me',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        if (userData === null) {
          notify('Unable to fetch your details, please login and try again!');
          setLoading(false);
        }
        setCurrentUser(userData);
        setAuthenticatedUser(userData);
      } else {
        console.log('Failed to fetch currently logged-in user');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Failed to fetch currently logged-in user:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="bg-white h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
          <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="mt-8 mb-4 font-semibold text-2xl text-center mx-8">
            Hello 👋 {currentUser !== null ? currentUser?.name : 'dear user'}, what
            would you like to do today?
          </div>
          <div className="mb-8">
            <div className="w-[90%] text-center font-medium max-w-[70ch] md:mx-auto pr-4 md:pr-0 ml-4 md:ml-auto md:text-center">
              Interested in shortening a URL?{' '}
              <Link to="/dashboard/new" className="text-primary">
                {' '}
                Shorten one now
              </Link>
              . Or would you like to see your shorten URLS?{' '}
              <Link to="/dashboard/my-links" className="text-primary">
              Take a look!
              </Link>
              .
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
