import Layout from '../../../components/Layout/Layout';
import analyticsImage from '../../../assets/images/analytics.jpg';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Analytics: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            {/* <img src={analyticsImage} alt="" className="w-[80%] mx-auto" /> */}
          </div>
          <div className="text-xl md:text-4xl max-w-[28ch] text-center mx-4 mb-4 md:mb-4 md:text-[40px] font-semibold">
          Unlock More Features: Upgrade Your Plan Today!
          </div>
          <div className="mb-8">
            <div className="w-[90%] text-center font-medium max-w-[70ch] md:mx-auto pr-4 md:pr-0 ml-4 md:ml-auto md:text-center">
            Unlock valuable insights and access advanced analytics by upgrading your plan. Discover our pricing options and make data-driven decisions today!{' '}
              <NavHashLink smooth to="/#pricing" className="text-primary">
                Click here to view our Pricing
              </NavHashLink>
              .
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
