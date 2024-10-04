import React from 'react'
import ButtonDownload from './ButtonDownload'
import catalogue from "../../assets/CATALOGUE-FINAL-GLOBAL-WEB.pdf"
import downloadIcon from "../../assets/icons - svg/Download_Cata_-_Achibest_icon.svg"

const DownloadCatalogue = () => {
  return (
    <ButtonDownload 
                btnIcon={downloadIcon}
                btnContent={"see our catalog"}
                rounded="rounded-3xl capitalize"
                link={catalogue}
                />
  )
}

export default DownloadCatalogue