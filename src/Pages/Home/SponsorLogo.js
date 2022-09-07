import React from 'react';
import sponsor1 from '../../asset/image/logo/logo1.png';
import sponsor2 from '../../asset/image/logo/logo2.png';
import sponsor3 from '../../asset/image/logo/logo3.png';
import sponsor4 from '../../asset/image/logo/logo4.png';
import sponsor5 from '../../asset/image/logo/logo5.png';

const SponsorLogo = () => {
    return (
        <div className='grid grid-cols lg:grid-cols-5 justify-center items-center mx-40 my-12'>
            <div >
                <img className='mb-5' src={sponsor1} alt="sponsor1" />
            </div>
            <div>
                <img className='mb-5' src={sponsor2} alt="sponsor2" />
            </div>
            <div>
                <img className='mb-5' src={sponsor3} alt="sponsor3" />
            </div>
            <div>
                <img className='mb-5' src={sponsor4} alt="sponsor4" />
            </div>
            <div>
                <img className='mb-5' src={sponsor5} alt="sponsor5" />
            </div>

        </div>
    );
};

export default SponsorLogo;