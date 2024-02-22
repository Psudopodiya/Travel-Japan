import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const GuideIcon = ({ name, designation }) => {
    return (
        <div>
            <div className="flex gap-2">
                <Avatar sx={{ height: '70px', width: '70px' }} />
                <div className="font-OpenSans flex-row space-y-1 text-sm text-black">
                    <div>
                        <div className="font-Enriqueta">{name}</div>
                        <div className="text-red-500">{designation}</div>
                    </div>
                    <div className="text-xs">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Totam, consequuntur.
                    </div>
                </div>
            </div>
        </div>
    );
};

GuideIcon.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
};

export default GuideIcon;
