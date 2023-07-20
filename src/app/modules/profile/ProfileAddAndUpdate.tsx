import { FC, useEffect, useRef, useState } from 'react';
import { MutableRefObject } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import "../styles/index.scss"
import './profile.scss'
import { Link } from 'react-router-dom'
import { ContactInformation } from './component/ContactInformation';
import { BasicInformation } from './component/BasicInformation';
import { WorkInformation } from './component/WorkInformation';
import { WorkExperienceInformation } from './component/WorkExperienceInformation';
import { WorkingProcessInformation } from './component/WorkingProcessInformation';
import { ConcurrentlyInformation } from './component/ConcurrentlyInformation';
import { SalaryHistoryInformation } from './component/SalaryHistoryInformation';
import { TempPapersInformation } from './component/TempPapersInformation';
import { AttachmentsInformation } from './component/AttachmentsInformation';
import FamilyInformation from './component/FamilyInformation';
import MilitaryInformation from './component/MilitaryInformation';
import MedicalInformation from './component/MedicalInformation';
import VaccinationInformation from './component/VaccinationInformation';
import PoliticsInformation from './component/PoliticsInformation';
import { MENU_LIST } from './const/ProfileConst';
import { handleAddOrUpdate } from './services/ProfileServices';
interface Props{
  handleCloseDialog:()=> void
}
const ProfileAddAndUpdate = (props:Props) => {
  const intl = useIntl()
  const { handleCloseDialog } = props
  const basicInformationRef = useRef<HTMLDivElement | null>(null);
  const contactInformationRef = useRef<HTMLDivElement | null>(null);
  const workInformationRef = useRef<HTMLDivElement | null>(null);
  const militaryInformationRef = useRef<HTMLDivElement | null>(null);
  const medicalInformationRef = useRef<HTMLDivElement | null>(null);
  const vaccinationInformationRef = useRef<HTMLDivElement | null>(null);
  const politicsInformationRef = useRef<HTMLDivElement | null>(null);
  const familyInformationRef = useRef<HTMLDivElement | null>(null);
  const workExperienceInformationRef = useRef<HTMLDivElement | null>(null);
  const workingProcessInformationRef = useRef<HTMLDivElement | null>(null);
  const concurrentlyInformationRef = useRef<HTMLDivElement | null>(null);
  const salaryHistoryInformationRef = useRef<HTMLDivElement | null>(null);
  const tempPapersInformationRef = useRef<HTMLDivElement | null>(null);
  const attachmentsInformationRef = useRef<HTMLDivElement | null>(null);

  const [activeTab, setActiveTab] = useState<string>('');
  const [dataFromChild, setDataFromChild] = useState({})
  const [typeSubmit, setTypeSubmit] = useState('employee')
  const handleTabClick = (tabId:string) => {
    setActiveTab(tabId);
  };

  const scrollToSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  const handleFormSubmit = () => {
    handleAddOrUpdate(dataFromChild, typeSubmit)
      .then(({ data }) => 
      {
        toast.success(intl.formatMessage({ id: 'GENERAL.ADD_SUCCESS' }))
      })
      .catch((err)=> {
        toast.error(intl.formatMessage({ id: 'GENERAL.ADD_ERROR' }))
      }
      )
  }

  const handleGetDataFromChildren = (data: {}) => {
    setDataFromChild({...dataFromChild, ...data})
  }

  const handleChangeTypeSubmit = (type: string) => {
    setTypeSubmit(type)
  }
  return (
    <div className="container ">
      <div className="row d-flex justify-content-between align-items-center mb-4 w-100">
        <div className='col d-flex'>
          <h2 className='me-2'>
            {intl.formatMessage({ id: 'PROFILE.ADD' })}
          </h2>
          <h2 className="bi bi-three-dots-vertical text-primary"></h2>
        </div>
        <div className='col d-flex justify-content-end'>
          <button
            className='button btn-white' onClick={handleCloseDialog}
          >
            {intl.formatMessage({ id: 'BTN.CANCEL' })}
          </button>
          <button
            onClick={()=> handleFormSubmit()}
            className='button btn-blue ms-3'
          >
            {intl.formatMessage({ id: 'BTN.SAVE' })}
          </button>
        </div>
      </div>
      <div className="layout">
        <div className="rich-list frame">
          <div className='table-of-profiles'>
          <div className='text-title center'>
            {intl.formatMessage({ id: 'GENERAL.TABLECONTENTS' })}
          </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#basic-information' ? 'active' : ''}`}
                to="#basic-information"
                onClick={() => {
                  scrollToSection(basicInformationRef);
                  handleTabClick('#basic-information');
                  handleChangeTypeSubmit('employee');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.BASIC' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#contact-information' ? 'active' : ''}`}
                to="#contact-information"
                onClick={() => {
                  scrollToSection(contactInformationRef);
                  handleTabClick('#contact-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.CONTACT' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#work-information' ? 'active' : ''}`}
                to="#work-information"
                onClick={() => {
                  scrollToSection(workInformationRef);
                  handleTabClick('#work-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.WORK' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#military-information' ? 'active' : ''}`}
                to="#military-information"
                onClick={() => {
                  scrollToSection(militaryInformationRef);
                  handleTabClick('#military-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.MILITARY' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#medical-information' ? 'active' : ''}`}
                to="#medical-information"
                onClick={() => {
                  scrollToSection(medicalInformationRef);
                  handleTabClick('#medical-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.MEDICAL' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#vaccination-information' ? 'active' : ''}`}
                to="#vaccination-information"
                onClick={() => {
                  scrollToSection(vaccinationInformationRef);
                  handleTabClick('#vaccination-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.VACCINATION' })}
                </span>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#family-information' ? 'active' : ''}`}
                to="#family-information"
                onClick={() => {
                  scrollToSection(familyInformationRef);
                  handleTabClick('#family-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.FAMILY' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#politics-information' ? 'active' : ''}`}
                to="#politics-information"
                onClick={() => {
                  scrollToSection(politicsInformationRef);
                  handleTabClick('#politics-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.FAMILY' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#workExperience-information' ? 'active' : ''}`}
                to="#workExperience-information"
                onClick={() => {
                  scrollToSection(workExperienceInformationRef);
                  handleTabClick('#workExperience-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.WORK.EXPERIENCE' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#workingProcess-information' ? 'active' : ''}`}
                to="#workingProcess-information"
                onClick={() => {
                  scrollToSection(workingProcessInformationRef);
                  handleTabClick('#workingProcess-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.WORKING.PROCESS' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#concurrently-information' ? 'active' : ''}`}
                to="#concurrently-information"
                onClick={() => {
                  scrollToSection(concurrentlyInformationRef);
                  handleTabClick('#concurrently-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.CONCURRENTLY' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#salaryHistory-information' ? 'active' : ''}`}
                to="#salaryHistory-information"
                onClick={() => {
                  scrollToSection(salaryHistoryInformationRef);
                  handleTabClick('#salaryHistory-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.SALARY' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#tempPapers-information' ? 'active' : ''}`}
                to="#-tempPapersinformation"
                onClick={() => {
                  scrollToSection(tempPapersInformationRef);
                  handleTabClick('#tempPapers-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.TEMP.PAPERS' })}
                </span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className={`item-of-profile ${activeTab === '#attachments-information' ? 'active' : ''}`}
                to="#attachments-information"
                onClick={() => {
                  scrollToSection(attachmentsInformationRef);
                  handleTabClick('#attachments-information');
                }}
              >
                <span className="text-wrapper">
                  {intl.formatMessage({ id: 'GENERAL.INFO.ATTACHMENTS' })}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="row mb-4 frame main__info">
            <img className='main__info--image' src="https://picsum.photos/200/200?random=1" alt="" />
          </div>
          <div className="row frame pb-12">
            <div id="basic-information" ref={basicInformationRef}>
              <BasicInformation handleGetDataFromChildren={handleGetDataFromChildren}/>
            </div>
            <div id="contact-information" ref={contactInformationRef}>
              <ContactInformation handleGetDataFromChildren={handleGetDataFromChildren}/>
            </div>
            <div id="work-information" ref={workInformationRef}>
              <WorkInformation handleGetDataFromChildren={handleGetDataFromChildren}/>
            </div>
            <div id="family-information" ref={familyInformationRef}>
              <FamilyInformation />
            </div>
            <div id="politics-information" ref={politicsInformationRef}>
              <PoliticsInformation />
            </div>
            <div id="military-information" ref={militaryInformationRef}>
              <MilitaryInformation />
            </div>
            <div id="medical-information" ref={medicalInformationRef}>
              <MedicalInformation />
            </div>
            <div id="vaccination-information" ref={vaccinationInformationRef}>
              <VaccinationInformation />
            </div>
            <div id='workExperience-information' ref={workExperienceInformationRef} >
              <WorkExperienceInformation />
            </div>
            <div id='workingProcess-information' ref={workingProcessInformationRef} >
              <WorkingProcessInformation />
            </div>
            <div id='concurrently-information' ref={concurrentlyInformationRef} >
              <ConcurrentlyInformation />
            </div>
            <div id='salaryHistory-information' ref={salaryHistoryInformationRef} >
              <SalaryHistoryInformation />
            </div>
            <div id='tempPapers-information' ref={tempPapersInformationRef} >
              <TempPapersInformation />
            </div>
            <div id="attachments-information" ref={attachmentsInformationRef}>
              <AttachmentsInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ProfileAddAndUpdate };
