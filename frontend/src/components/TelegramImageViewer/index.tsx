import { FC, useEffect, useState } from "react";
import { TelegramPhoto } from "../../pages/dashboard/purchase/types";
import { ImageViewModal } from "./ImageViewModal";

type Props = {
    image: TelegramPhoto[];
    small?: boolean;
}

export const TelegramImageViewer: FC<Props> = ({ image, small = false }) => {

    const TOKEN = import.meta.env.VITE_REACT_APP_TELEGRAM_TOKEN;
    const fetchingUrl = `https://api.telegram.org/bot${TOKEN}/getFile?file_id=`;

    const [previewImage, setImage] = useState<string>();

    const [loading, setLoading] = useState<boolean>();

    const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);



    useEffect(() => {
        async function loadImage() {

            if (image && image.length > 0) {

                const imageIndex = small ? 0 : image.length - 1;

                setLoading(true);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const imageResponse: any = await fetch(fetchingUrl + image[imageIndex].file_id);
                const imageResponseJson = await imageResponse.json();
                if (imageResponse) {
                    const url = `https://api.telegram.org/file/bot${TOKEN}/${imageResponseJson.result.file_path}`;
                    setImage(url);
                }
                setLoading(false);
            }
        }
        loadImage();
    }, [TOKEN, fetchingUrl, image, small]);

    if (!image || image.length == 0) {
        return <></>
    }

    if (loading) {
        return <>Loading..</>
    }



    return (
        <>
            <div className="py-1 cursor-pointer flex justify-center" onClick={()=>{
                if (small) setIsViewModalOpen(true)
            }}>
                <img src={previewImage}  />
            </div>
            <ImageViewModal
                isModalOpen={isViewModalOpen}
                toggle={() => setIsViewModalOpen(!isViewModalOpen)}
                image={image}
            />
        </>

    )
}
