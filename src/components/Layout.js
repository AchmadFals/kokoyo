import * as React from "react";
import { get } from "lodash";
import { Navbar, Nav, Image, Button, Collapse, Modal } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { formatCurrency } from "../libs/numbers";
import { updateBillingInvoice } from "../redux/actions/billing_invoices";
import NoSSR from "react-no-ssr";

let _loadingSpinner = null;

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }
  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div
          className="loader-wrapper"
          style={{
            visibility: visible ? "visible" : "hidden",
            opacity: visible ? 1 : 0,
          }}
        >
          <div className="loader" />
        </div>
        <style jsx>{`
          .loader-wrapper {
            -webkit-transition: visibility 0s linear 200ms, opacity 200ms linear; /* Safari */
            transition: visibility 0s linear 200ms, opacity 200ms linear;

            opacity: 1;
            position: fixed; /* Sit on top of the page content */
            display: block; /* Hidden by default */
            width: 100%; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(
              243,
              243,
              243,
              0.4
            ); /* Black background with opacity */
            z-index: 9997; /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer; /* Add a pointer on hover */
          }
          .loader {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 3px solid #f3f3f3; /* Light grey */
            border-top: 3px solid #0daa66; /* Green */
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 1s linear infinite;
          }

          .mini-loader {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 5px solid #ccc; /* Light grey */
            border-top: 5px solid #0daa66; /* Green */
            border-radius: 50%;
            width: 45px;
            height: 45px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }
}

class Layout extends React.Component {
  state = {
    condition: false,
    chat: false,
    setting: false,
    show: false,
    setShow: false,
    showModal: false,
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChat = this.handleChat.bind(this);
    this.handleSetting = this.handleSetting.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      condition: false,
      chat: false,
      setting: false,
      open: false,
      style: false,
      showModal: false,
      show: false,
      setShow: false,
      billingInvoiceModalVisible: false,
      notApprovedBillingInvoice: null,
    };
  }

  componentDidMount() {
    const { company, companyIncluded } = this.props;
    if (company && company.attributes) {
      if (!isEmpty(company.relationships && company.relationships.not_approved_billing_invoice)) {
        this.setState({
          notApprovedBillingInvoice:
            companyIncluded["not_approved_billing_invoice"][
              company.relationships.not_approved_billing_invoice.id
            ].attributes,
          billingInvoiceModalVisible: true,
        });
      }
    }
    hideLoadingSpinner();
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  handleChat() {
    this.setState({
      chat: !this.state.chat,
    });
  }

  handleSetting() {
    this.setState({
      setting: !this.state.setting,
    });
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  closeBillingInvoiceModal = () => {
    this.setState({
      billingInvoiceModalVisible: false,
    });
  };

  handleApproveBillingInvoice = async (e) => {
    if (e) e.preventDefault();
    const { notApprovedBillingInvoice } = this.state;
    showLoadingSpinner();
    await this.props.updateBillingInvoice(
      notApprovedBillingInvoice.id,
      {
        is_approved: true,
      },
      {}
    )
    addNotification({
      level: "success",
      message: "Approved billing invoices successfully!",
    });
    this.setState({
      billingInvoiceModalVisible: false,
    });
    hideLoadingSpinner();
  };

  render() {
    const { title, customTitle } = this.props;
    const classname = get(this.props, "classname", " ");
    const {
      billingInvoiceModalVisible,
      notApprovedBillingInvoice,
    } = this.state;
    return (
      <div className={classname}>
        {/* Left Navigation */}

        <LoadingSpinner
          visible={true}
          ref={(comp) => {
            _loadingSpinner = comp;
          }}
        />

      </div>
    );
  }
}

export const addNotification = (params) => {
  if (!params) return;
  if (!params.level) {
    params.level = "warning";
  }
  const classes = {
    success: "custom-toast-success",
    warning: "custom-toast-warning",
  };
  toast.success(params.message, {
    className: classes[params.level],
    position: toast.POSITION.TOP_RIGHT,
    autoClose: params.duration ? params.duration : 3000,
  });
};

export const handleError = (error) => {
  console.warn("Handling error:", error.message);
  toast.error(error.message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
  hideLoadingSpinner();
};

export const showLoadingSpinner = () => {
  if (!_loadingSpinner) return;
  _loadingSpinner.show();
};

export const hideLoadingSpinner = () => {
  if (!_loadingSpinner) return;
  _loadingSpinner.hide();
};

const mapStateToProps = (state) => {
  const { data, companyIncluded } = state.company;
  return {
    company: data,
    companyIncluded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBillingInvoice: (id, payload, opts) =>
      dispatch(updateBillingInvoice(id, payload, opts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);