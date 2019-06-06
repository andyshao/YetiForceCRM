/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */

'use strict';

jQuery.Class(
	'YetiForce_KnowledgeBaseModal_Js',
	{
		/**
		 * Register events
		 */
		registerEvents() {
			KnowledgeBase.mount({
				el: '#KnowledgeBaseModal',
				state: {
					moduleName: 'KnowledgeBase'
				}
			});
		}
	},
	{}
);
YetiForce_KnowledgeBaseModal_Js.registerEvents();