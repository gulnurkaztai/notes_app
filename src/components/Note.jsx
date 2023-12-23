
import PropTypes from 'prop-types';

const Note = (props) => {
    return (
        <div className="note">
            {<>
                <p>{props.title}</p>
            <p>{props.content}</p>
            </>
                }
        </div>
    );
};

Note.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Note;
