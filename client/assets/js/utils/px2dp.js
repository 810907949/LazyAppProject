/**
 * Created by wangdi on 5/11/16.
 */
'use strict';

import {PixelRatio} from 'react-native';

export default function px2dp(uiElementPx) {

	return px=>PixelRatio.roundToNearestPixel(px);
	
}