import React from "react";
import { useState } from "react";

export default function CustomerForm() {
  const [cinCode, setcinCode] = useState("");
  const [branchCode, setbranchCode] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [customerType, setcustomerType] = useState("");
  const [primaryHolderCinCode, setprimaryHolderCinCode] = useState("");
  const [
    relationshipWithPrimaryHolder,
    setrelationshipWithPrimaryHolder,
  ] = useState("");
  const [title, settitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [maritalStatus, setmaritalStatus] = useState("");
  const [maidenName, setmaidenName] = useState("");
  const [applicantsAddress, setapplicantsAddress] = useState("");
  const [fatherSName, setfatherSName] = useState("");
  const [motherSName, setmotherSName] = useState("");
  const [spouseName, setspouseName] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [placeOfBirth, setplaceOfBirth] = useState("");
  const [countryOfBirth, setcountryOfBirth] = useState("");
  const [citizenship, setcitizenship] = useState("");
  const [qualification, setqualification] = useState("");
  const [occupationType, setoccupationType] = useState("");
  const [occupation, setoccupation] = useState("");
  const [annualIncome, setannualIncome] = useState("");
  const [countryOfTaxResideny, setcountryOfTaxResideny] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [emailId, setemailId] = useState("");
  const [nomineeDeclared, setnomineeDeclared] = useState("");
  const [nomineeName, setnomineeName] = useState("");
  const [nomineeAddress, setnomineeAddress] = useState("");
  const [nomineePhoneNumber, setnomineePhoneNumber] = useState("");
  const [relationshipWithDepositor, setrelationshipWithDepositor] = useState(
    ""
  );
  const [nomineeDob, setnomineeDob] = useState("");
  const [nomineeAdharNumber, setnomineeAdharNumber] = useState("");
  const [minorNominee, setminorNominee] = useState("");
  const [gaurdianName, setgaurdianName] = useState("");
  const [gaurdianAddress, setgaurdianAddress] = useState("");
  const [
    applicantAlternateAccountNumber,
    setapplicantAlternateAccountNumber,
  ] = useState("");
  const [alternateIfscCode, setalternateIfscCode] = useState("");
  const [alternateBankName, setalternateBankName] = useState("");
  const [alternateBankBranchAddress, setalternateBankBranchAddress] = useState(
    ""
  );
  const [numberOfSharesToBeAlotted, setnumberOfSharesToBeAlotted] = useState(
    ""
  );
  const [amountOfShares, setamountOfShares] = useState("");
  const [sharePrice, setsharePrice] = useState("");
  const [memberFee, setmemberFee] = useState("");
  const [applicantAdharNumber, setapplicantAdharNumber] = useState("");
  const [otherIdProof, setotherIdProof] = useState("");
  const [otherIdProofNumber, setotherIdProofNumber] = useState("");
  const [dateOfAccountOpening, setdateOfAccountOpening] = useState("");
  const [placeOfAccountOpening, setplaceOfAccountOpening] = useState("");

  return (
    <div className="bg-light container">
      <div className="m-1 text-center">
        <h2>Cutomer Details Form</h2>
        <p className="lead">Please Fill all the details related to custormer</p>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            name="cinCode"
            placeholder="Cin Code"
            onChange={(e) => setcinCode(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="branchCode"
            placeholder="Branch Code"
            onChange={(e) => setbranchCode(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            onChange={(e) => setaccountNumber(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="customerType"
            placeholder="Customer Type"
            onChange={(e) => setcustomerType(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="primaryHolderCinCode"
            placeholder="Primary Holder Cin Code"
            onChange={(e) => setprimaryHolderCinCode(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="relationshipWithPrimaryHolder"
            placeholder="Relationship With Primary Holder"
            onChange={(e) => setrelationshipWithPrimaryHolder(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            onChange={(e) => setmiddleName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            onChange={(e) => setdateOfBirth(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={(e) => setgender(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="maritalStatus"
            placeholder="Marital Status"
            onChange={(e) => setmaritalStatus(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="maidenName"
            placeholder="Maiden Name"
            onChange={(e) => setmaidenName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="applicantsAddress"
            placeholder="Applicants Address"
            onChange={(e) => setapplicantsAddress(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="fatherSName"
            placeholder="Father'S Name"
            onChange={(e) => setfatherSName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="motherSName"
            placeholder="Mother'S Name"
            onChange={(e) => setmotherSName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="spouseName"
            placeholder="Spouse Name"
            onChange={(e) => setspouseName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            onChange={(e) => setbloodGroup(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="placeOfBirth"
            placeholder="Place Of Birth"
            onChange={(e) => setplaceOfBirth(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="countryOfBirth"
            placeholder="Country Of Birth"
            onChange={(e) => setcountryOfBirth(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="citizenship"
            placeholder="Citizenship"
            onChange={(e) => setcitizenship(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            onChange={(e) => setqualification(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="occupationType"
            placeholder="Occupation Type"
            onChange={(e) => setoccupationType(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            onChange={(e) => setoccupation(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="annualIncome"
            placeholder="Annual Income"
            onChange={(e) => setannualIncome(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="countryOfTaxResideny"
            placeholder="Country Of Tax Resideny"
            onChange={(e) => setcountryOfTaxResideny(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={(e) => setmobileNumber(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="emailId"
            placeholder="Email Id"
            onChange={(e) => setemailId(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="nomineeDeclared"
            placeholder="Nominee Declared"
            onChange={(e) => setnomineeDeclared(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="nomineeName"
            placeholder="Nominee Name"
            onChange={(e) => setnomineeName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="nomineeAddress"
            placeholder="Nominee Address"
            onChange={(e) => setnomineeAddress(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="nomineePhoneNumber"
            placeholder="Nominee Phone Number"
            onChange={(e) => setnomineePhoneNumber(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="relationshipWithDepositor"
            placeholder="Relationship With Depositor"
            onChange={(e) => setrelationshipWithDepositor(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="nomineeDob"
            placeholder="Nominee Dob"
            onChange={(e) => setnomineeDob(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="nomineeAdharNumber"
            placeholder="Nominee Adhar Number"
            onChange={(e) => setnomineeAdharNumber(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="minorNominee"
            placeholder="Minor Nominee"
            onChange={(e) => setminorNominee(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="gaurdianName"
            placeholder="Gaurdian Name"
            onChange={(e) => setgaurdianName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="gaurdianAddress"
            placeholder="Gaurdian Address"
            onChange={(e) => setgaurdianAddress(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="applicantAlternateAccountNumber"
            placeholder="Applicant Alternate Account Number"
            onChange={(e) => setapplicantAlternateAccountNumber(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="alternateIfscCode"
            placeholder="Alternate Ifsc Code"
            onChange={(e) => setalternateIfscCode(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="alternateBankName"
            placeholder="Alternate Bank Name"
            onChange={(e) => setalternateBankName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="alternateBankBranchAddress"
            placeholder="Alternate Bank Branch Address"
            onChange={(e) => setalternateBankBranchAddress(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="numberOfSharesToBeAlotted"
            placeholder="Number Of Shares To Be Alotted"
            onChange={(e) => setnumberOfSharesToBeAlotted(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="amountOfShares"
            placeholder="Amount Of Shares"
            onChange={(e) => setamountOfShares(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="sharePrice"
            placeholder="Share Price"
            onChange={(e) => setsharePrice(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="memberFee"
            placeholder="Member Fee"
            onChange={(e) => setmemberFee(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="applicantAdharNumber"
            placeholder="Applicant Adhar Number"
            onChange={(e) => setapplicantAdharNumber(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="otherIdProof"
            placeholder="Other Id Proof"
            onChange={(e) => setotherIdProof(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="otherIdProofNumber"
            placeholder="Other Id Proof Number"
            onChange={(e) => setotherIdProofNumber(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <input
            type="date"
            name="dateOfAccountOpening"
            placeholder="Date Of Account Opening"
            onChange={(e) => setdateOfAccountOpening(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="placeOfAccountOpening"
            placeholder="Place Of Account Opening"
            onChange={(e) => setplaceOfAccountOpening(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <button className="btn-success">Save Form</button>
        </div>
        <div className="col">
          <button className="btn-warning">Reset Form</button>
        </div>
      </div>
    </div>
  );
}
