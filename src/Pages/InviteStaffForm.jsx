import React, { useState } from "react";
import { Input, Row, Col, Form, Radio } from "antd";
import PhoneNumber from "@/components/PhoneNumber";
import { useDispatch } from "umi";

const InviteForm = ({ form }) => {
  const [value, setValue] = useState(" ");

  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const dispatch = useDispatch();
  const checkUniqueness = (emailString) =>
    dispatch({
      type: "user/checkUniqueness",
      payload: { pathParams: { email: emailString } },
    });
  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 border-b">
        <Row gutter={24}>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="firstName"
              label={<span className="formLabel">First name</span>}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please enter First name",
                },
                {
                  pattern: /^[a-zA-Z ]*$/,
                  message: "Please enter text only",
                },
              ]}
            >
              <Input size="large" autoFocus placeholder="Enter First name" />
            </Form.Item>
          </Col>{" "}
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="lastName"
              label={<span className="formLabel">Last name</span>}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please enter Last name",
                },
                {
                  pattern: /^[a-zA-Z ]*$/,
                  message: "Please enter text only",
                },
              ]}
            >
              <Input size="large" autoFocus placeholder="Enter Last name" />
            </Form.Item>
          </Col>{" "}
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label={<span className="formLabel">Email</span>}
              name="email"
              initialValue=""
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Email can't be blank!",
                },
                {
                  message: "Please enter a valid email address!",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              ]}
            >
              <Input
                size="large"
                type="email"
                name="staff-email"
                id="staff-email"
                placeholder="Enter staff email address"
                onChange={() => {
                  form
                    .validateFields(["email"])
                    .then(({ email }) => {
                      checkUniqueness(email.toLowerCase()).then(
                        ({ isUnique }) => {
                          if (!isUnique) {
                            form.setFields([
                              {
                                name: "email",
                                errors: ["This email already exist"],
                              },
                            ]);
                          }
                        }
                      );
                    })
                    .catch(() => {});
                }}
              />
            </Form.Item>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="phoneNumber"
              label={<span className="formLabel">Phone number</span>}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Phone can't be blank!",
                },
              ]}
            >
              <PhoneNumber
                countryCode={["mainForm", "kinDetails", "countryCode"]}
                rules={[
                  // () => ({
                  //   validator(_, value) {
                  //     if (value?.length === 0) return Promise.resolve();
                  //     return Promise.resolve();
                  //   },
                  // }),
                  {
                    max: 10,
                    message: "Please enter only 10 digits for phone number",
                  },
                  {
                    min: 10,
                    message: "Please enter atleast 10 digits for phone number",
                  },
                ]}
                form={form}
                placeholder="##########"
                name={["mainForm", "kinDetails", "mobile"]}
              />
            </Form.Item>
          </Col>{" "}
          {/* <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Form.Item name="designation" label={<span className="formLabel">Designation</span>}>
              <Input size="large" placeholder="Enter staff designation" />
            </Form.Item>
          </Col> */}
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Form.Item
              autocomplete="off"
              initialValue=""
              label={<span className="formLabel">Password</span>}
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Password can't be blank!",
                },
              ]}
            >
              <Input.Password
                autocomplete="off"
                name="staff-password"
                id="staff-password"
                size="large"
                placeholder="Enter password"
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
      <div className="bg-gray-100 p-4 border-b">
        <div className="mb-4">
          <div className="font-semibold">
            What role would you like to give your staff?
          </div>
          <div>
            After your staff accepts their invitation they will be able to
            manage your organization in the role selected below.
          </div>
        </div>
        <Form.Item
          name="role"
          initialValue="admin"
          rules={[
            {
              required: true,
              message: "Please select staff role",
            },
          ]}
        >
          <Radio.Group
            className="w-full "
            onChange={onChange}
            value={value}
            defaultValue="admin"
          >
            <div className="rounded border bg-white rounded">
              <div className="hover:bg-gray-100 border-b rounded rounded-b-none px-4 ">
                <Radio
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                  value="admin"
                >
                  <div className="flex-auto whitespace-normal cursor-pointer leading-normal py-2">
                    <div className="">
                      <div className="font-semibold">Admin</div>
                      <span>Can manage all function of the application.</span>
                    </div>
                  </div>
                </Radio>
              </div>
              <div className="flex items-center hover:bg-gray-100 border-b rounded rounded-b-none px-4 ">
                <Radio
                  value="manager"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="whitespace-normal cursor-pointer leading-normal py-2">
                    <div className="font-semibold">Manager</div>
                    <div className="flex-1 w-full">
                      Manages all production quality.
                    </div>
                  </div>
                </Radio>
              </div>
              <div className="flex items-center hover:bg-gray-100 rounded border-b rounded-b-none px-4 ">
                <Radio
                  value="employee"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="flex-auto whitespace-normal cursor-pointer leading-normal py-2">
                    <div className="font-semibold">Employee</div>
                    <div>
                      {" "}
                      Responsible for entire process. owns and manages process.
                    </div>
                  </div>
                </Radio>
              </div>{" "}
              <div className="hover:bg-gray-100 rounded rounded-b-none px-4 ">
                <Radio
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                  value="collector"
                >
                  <div className="flex-auto whitespace-normal cursor-pointer leading-normal py-2">
                    <div className="">
                      <div className="font-semibold">Collector</div>
                      <span>Can manage all work.</span>
                    </div>
                  </div>
                </Radio>
              </div>
            </div>
          </Radio.Group>
        </Form.Item>
      </div>
    </div>
  );
};
export default InviteForm;
