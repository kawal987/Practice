import { Card, Col, DatePicker, Form, Modal, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { connect } from "umi";
// import { hostname } from '@/models/Untitled-2';
import moment from "moment";
import ReactDOM from "react-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const { RangePicker } = DatePicker;

const ModalOfExport = ({
  setIsModal,
  isModal,
  dispatch,
  exportExcel,
  collectorList,
}) => {
  console.log("exportExcel", exportExcel);
  const [filterCategory, setFilterCategory] = useState("");
  // const [selectDate, setSelectDate] = useState('');
  // const [collectorName, setCollectorName] = useState(' ');
  // // console.log('collectorName', collectorName);
  // const [selectCustomDate, setSelectCustomDate] = useState({
  //   startDate: '',
  //   endDate: '',
  // });

  const { Option } = Select;

  const [form] = Form.useForm();
  console.log("form", form.getFieldsValue("custom"));

  const handleChangeItem = (value) => {
    // console.log('value', value);
    setFilterCategory(value);
  };

  const getCollectorList = () => {
    dispatch({
      type: "staff/getCollectorList",
      payload: {
        query: {
          role: "Collector",
        },
      },
    });
  };

  const exportToExcel = ({ name, date, rangeDate: { startDate, endDate } }) => {
    dispatch({
      type: "staff/ExportToExcel",
      payload: {
        query: {
          collectorName: !!name === false ? "" : name,
          date: !!date === false ? "" : moment(date)?.format(),
          fromDate: !!startDate === false ? "" : moment(startDate)?.format(),
          toDate: !!endDate === false ? "" : moment(endDate)?.format(),
        },
      },
    }).then((res) => {
      console.log("res", res);
      // setSelectDate('');
      // setCollectorName('');
      // setSelectCustomDate({
      //   startDate: '',
      //   endDate: '',
      // });
    });
  };

  // useEffect(() => {
  //   exportToExcel();
  // }, []);

  return (
    <div>
      <Form form={form}>
        <Modal
          title="Export To Excel"
          centered
          footer={
            <div className="App">
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="download excel"
                sheet="tablexls"
                buttonText={
                  <div
                  // onClick={() => {
                  //   exportToExcel();
                  // }}
                  >
                    download
                  </div>
                }
              />
              <table id="table-to-xls" style={{ display: "none" }}>
                <thead>
                  <tr>
                    {" "}
                    <th>Area</th>
                    <th>Account no.</th>
                    <th>Customer Loan ID </th>
                    <th>Collector Name</th>
                  </tr>
                </thead>
                <tbody>
                  {exportExcel?.data?.map((item) => (
                    <tr key={item}>
                      <td>{item?.area}</td>
                      <td>{item?.accountId}</td>
                      <td>{item?.customerLoanId}</td>
                      <td>{item?.firstName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
          visible={isModal}
          onOk={() => {
            setIsModal(false);
          }}
          onCancel={() => setIsModal(false)}
        >
          <div className="p-4 border-b">
            <Card style={{ borderRadius: "10px" }}>
              <Row gutter={24}>
                <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                  <Form.Item
                    name="filterCategory"
                    label={<span className="formLabel">Filter category </span>}
                  >
                    <Select
                      showSearch
                      placeholder="Select a item"
                      size="large"
                      // onChange={(e) => {
                      // setCollectorId(e);
                      onChange={handleChangeItem}
                      // }}
                    >
                      <Option value="CollectorName" key="CollectorName">
                        Collector Name
                      </Option>
                      <Option value="Date" key="Date">
                        Date
                      </Option>
                      <Option value="Custom" key="Custom">
                        Custom
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>{" "}
              </Row>
              <Row>
                {filterCategory === "CollectorName" ? (
                  <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                    <Form.Item
                      name="collector"
                      label={<span className="formLabel">Collector</span>}
                    >
                      <Select
                        showSearch
                        placeholder="Select a collector"
                        size="large"
                        onChange={(e) => {
                          getCollectorList();
                          exportToExcel({ name: e, date: "", rangeDate: "" });
                        }}
                        onSelect={(e) => {}}
                        onClick={() => {
                          getCollectorList();
                        }}
                      >
                        {collectorList?.data?.map((items) => (
                          <Option key={items?.firstName}>
                            {items?.firstName}{" "}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                ) : (
                  ""
                )}
                {filterCategory === "Date" ? (
                  <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                    <Form.Item
                      name="date"
                      label={<span className="formLabel">Date</span>}
                    >
                      <DatePicker
                        size="large"
                        // onSelect={(e) => {
                        //   setSelectDate(e?._d);
                        //   setCollectorName('');
                        //   setSelectCustomDate({
                        //     startDate: '',
                        //     endDate: '',
                        //   });

                        //   exportToExcel();
                        // }}
                        onChange={(e) => {
                          exportToExcel({
                            name: "",
                            date: e?._d,
                            rangeDate: { startDate },
                          });
                        }}
                      />
                    </Form.Item>
                  </Col>
                ) : (
                  ""
                )}
                {filterCategory === "Custom" ? (
                  <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                    <Form.Item
                      name="custom"
                      label={<span className="formLabel">Date</span>}
                    >
                      {/* <div className="formLabel">Date</div> */}
                      <RangePicker
                        onChange={(e, dateString) => {
                          // setSelectCustomDate({
                          //   startDate: e[0],
                          //   endDate: e[1],
                          // });
                          exportToExcel({
                            name: "",
                            date: "",
                            rangeDate: {
                              startDate: e[0],
                              endDate: e[1],
                            },
                          });
                        }}
                        // onSelect={(e) => console.log('e', e)}
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </Card>
          </div>
        </Modal>
      </Form>
    </div>
  );
};
export default connect(({ staff, loanForm }) => ({
  exportExcel: staff.exportExcel,
  customersList: staff.customersList,
  collectorList: staff.collectorList,
}))(ModalOfExport);
