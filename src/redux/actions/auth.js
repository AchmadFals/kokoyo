import AuthService from "../../service/auth";
import CompanyService from "../../service/company";
import encryptedLS from "../../libs/encryptedLS";
import { showLoadingSpinner, hideLoadingSpinner } from "../../components/Layout";

export const LoginAuth = (email, password, interfaceApps) => async (
  dispatch
) => {
  showLoadingSpinner();
  try {
    let response = await AuthService.login(email, password, interfaceApps);

    const user = response.data.data.user;

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user },
    });

    encryptedLS.set("___user_data", {
      ...response.data.data.token,
      userCompanyId: response.data.data.user.company_id,
      roles: response.data.data.user.roles,
      permissions: response.data.data.permissions,
    });
    const optsCompany = {
      params: {
        include: "not_approved_billing_invoice,company_attachments",
      },
    };
    response = await CompanyService.getCompany(
      {
        company_id: user.company_id,
      },
      optsCompany
    );

    dispatch({
      type: "GET_COMPANY",
      payload: {
        data: response.data.data,
        included: response.data.included,
      },
    });

    return true;
  } catch (e) {
    console.log(e)
    hideLoadingSpinner();
    throw {
      message: e,
    };
  }
};
// export const LoginAuth = (email, password) => (dispatch) => {
//   return AuthService.login(email, password).then(
//     (data) => {
//       dispatch({
//         type: "LOGIN_SUCCESS",
//         payload: { user: data.data.data.user },
//       });

//       encryptedLS.set("___user_data", {
//         ...data.data.data.token,
//         permissions: data.data.data.permissions
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       dispatch({
//         type: "LOGIN_FAIL",
//       });

//       return Promise.reject();
//     }
//   );
// };

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: "LOGOUT",
  });
};
