import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';

function Overlay() {
    return(
        <div id="imgOverlay" className="imgOverlay">

            <div className="imgOverlayInner">
                <div className="overlayFrame">
                    <FontAwesomeIcon icon={faCat} />
                </div>
                <div className="overlayFrame">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="overlayFrame">
                    <FontAwesomeIcon icon={faDog} />
                </div>
            </div>

        </div>
    )
}

export default Overlay;