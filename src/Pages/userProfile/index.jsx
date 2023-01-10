/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/**
 *@BaseView - The Purpose of this component is that user can update its general  account information here
 *
 */
import React, { useEffect } from "react";
import { connect, useParams, useHistory } from "umi";
import { Form, message, Button } from "antd";
import CardSection from "@/components/CardSection";
import Address from "@/components/Address";
import Breadcrumbs from "@/components/BreadCrumbs";
import Page from "@/components/Page";
import BasicDetailsForm from "./BasicDetailsForm";
import { dateToFromNowDaily } from "@/utils/common";

const UserProfile = ({
  dispatch,
  currentUser,
  updateProfileLoading,
  getStaffMember,
}) => {
  const { staffId } = useParams();
  console.log("staffId", staffId);
  const history = useHistory();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!staffId) {
      form?.setFieldsValue({
        firstname: currentUser?.data?.firstName,
        lastname: currentUser?.data?.lastName,

        email: currentUser?.data?.email,
        phone: currentUser?.data?.phone?.number,
        countryCode: currentUser?.data?.phone?.countryCode,
        designation: currentUser?.data?.role,

        address: {
          ...currentUser?.data?.address,
        },
      });
    } else {
      dispatch({
        type: "staff/getStaffMember",
        payload: {
          pathParams: {
            id: staffId,
          },
        },
      }).then((res) => {
        console.log("res", res);
        form?.setFieldsValue({
          ...res?.data,
          firstname: res?.data?.firstName,
          lastname: res?.data?.lastName,
          phone: res?.data?.phone?.number,
          mobile: res?.data?.mobile?.slice(3, res?.data?.mobile?.length),
          address: {
            ...res?.data?.address,
          },
        });
      });
    }
  }, [currentUser, staffId]);

  // useEffect(() => {
  //   if (staffId) {
  //     form?.setFieldsValue({
  //       ...getStaffMember,
  //       mobile: getStaffMember?.mobile?.slice(3, getStaffMember?.mobile?.length),
  //       address: {
  //         ...getStaffMember?.address,
  //       },
  //     });
  //   }
  // }, [staffId, getStaffMember]);
  // console.log('getStaffMember', currentUser)

  const staffPathArray = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "All Staff",
      path: "/staff/list",
    },
    {
      name: <div className="capitalize">{getStaffMember?.name}</div>,
      path: "#",
    },
  ];
  const pathArray = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Your profile",
      path: "/user-profile",
    },
  ];

  return (
    <div className="container mx-auto">
      <Form
        form={form}
        layout="vertical"
        onFinish={(value) => {
          const data = value;
          data.address.address_line_1 =
            data?.address?.address_line_1 &&
            data?.address?.address_line_1.replaceAll(/undefined/gi, "").trim();

          // data.address.address_line_2 =
          //   data?.address?.address_line_2 &&
          //   data?.address?.address_line_2.replaceAll(/undefined/gi, '').trim();

          data.phone = data?.phone ? `${data?.countryCode}${data?.phone}` : "";
          delete data?.country_code;

          if (data?.address && Object.keys(data?.address).length > 0)
            Object.keys(data?.address)?.map((item) => {
              if (data?.address[item] === undefined) delete data?.address[item];
            });
          data._id = staffId || currentUser?._id;
          data.invitedRole = data?.designation;
          data.address.addressLine1 = data.address.address_line_1;
          delete data.address.address_line_1;
          data.address.zipCode = data.address.postal_code;
          delete data.address.postal_code;
          data.address.state = data.address.state_code;
          delete data.address.state_code;
          data.address.country = data.address.country_code;
          delete data.address.country_code;

          dispatch({
            type: "user/updateCurrent",
            payload: {
              body: {
                ...data,
              },
            },
          }).then((res) => {
            if (res) {
              message.success("Profile updated successfully!");
              if (staffId) history.push(`/staff/${staffId}/view`);
            }
          });
        }}
        hideRequiredMark
        colon={false}
      >
        <Page
          title={staffId ? getStaffMember?.name : "Your profile"}
          breadcrumbs={
            <Breadcrumbs path={staffId ? staffPathArray : pathArray} />
          }
          primaryAction={
            <Button
              type="primary"
              size="large"
              className="Button"
              htmlType="submit"
              block
              loading={updateProfileLoading}
            >
              Update
            </Button>
          }
        >
          <CardSection
            noPadding
            className="mt-4"
            leftContent={
              <div className="pr-8 ">
                <div className="text-blue-900 font-semibold text-xl">
                  {staffId ? "Basic details" : "Your details"}
                </div>
                <div className="text-gray-600">
                  <p className="mt-4">
                    Fill {staffId ? "the" : "your "} details like name and
                    designation.
                  </p>
                </div>
              </div>
            }
            rightContent={<BasicDetailsForm form={form} />}
          />
          <CardSection
            noPadding
            className="mt-4"
            leftContent={
              <div className="pr-8 ">
                <div className="text-blue-900 font-semibold text-xl">
                  {staffId ? "Address" : "Your address "}
                </div>
                <div className="text-gray-600">
                  <p className="mt-4">
                    Fill {staffId ? "the" : "your "} address details like county
                    and city.
                  </p>
                </div>
              </div>
            }
            rightContent={
              <div className="bg-white rounded shadow p-4">
                <Address form={form} />
              </div>
            }
          />
        </Page>
      </Form>
    </div>
  );
};

export default connect(({ user, loading, staff }) => ({
  currentUser: user.currentUser,
  getStaffMember: staff.getStaffMember,
  updateProfileLoading: loading.effects["user/updateCurrent"],
}))(UserProfile);
