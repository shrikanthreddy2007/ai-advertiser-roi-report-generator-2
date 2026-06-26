import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BfpzdnmK.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-api-CqHvI0_R.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var generateReportFn = createServerFn().validator((data) => data).handler(createSsrRpc("fbe8d84b8b7054c995fc9a897afb0326f87131e72f1f90e631d21e4598949283"));
//#endregion
export { generateReportFn as t };
