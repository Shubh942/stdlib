/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './app.jsx';


// MAIN //

function ServerApp() {
	return (
		<StaticRouter location="/v0.0.87/docs/api/@stdlib/assert/is-boolean-array">
			<App />
		</StaticRouter>
	);
}


// EXPORTS //

export default ServerApp;
