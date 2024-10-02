import React from 'react'
import ButtonDownload from './ButtonDownload'

const DownloadCatalogue = () => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <ButtonDownload 
                btnIcon={PF+"icons - svg/Download_Cata_-_Achibest_icon.svg"}
                btnContent={"see our catalog"}
                rounded="rounded-3xl capitalize"
                link={"../assets/CATALOGUE-FINAL-GLOBAL-WEB.pdf"}
                />
  )
}

export default DownloadCatalogue