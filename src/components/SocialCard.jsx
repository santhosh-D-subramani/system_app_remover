

import PropTypes from 'prop-types';

const SocialCard = ({link, icon}) => {
  return (
    <div className="bg-primary-800 rounded-md w-10 h-10 flex justify-center items-center mr-2">
              <a
                href={link}     target="_blank"
                rel="noopener noreferrer">
                <button className="text-sm text-white flex items-center justify-center px-4 py-2 gap-2  rounded-sm">
                {icon}</button>
                </a>
        </div>
  )
}
SocialCard.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialCard;

