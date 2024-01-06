import { imageUpload } from "@/utils/Cloudinary";
import { getErrorMessageByPropertyName } from "@/utils/SchemaValidator";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FileUploader } from "react-drag-drop-files";
import { Image } from "@nextui-org/image";

const fileTypes = ["JPG", "PNG", "GIF"];

const UploadImage = ({ name }: { name: string }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState(null);

  const {
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  const handleChange = async (file: any) => {
    setLoading(true);
    clearErrors(name);
    setFile(file);
    console.log(file);
    try {
      const res = await imageUpload(file);
      console.log(res);
      setLoading(false);
      setImageUrl(res);
      setValue(name, res);
      clearErrors(name);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //   const handleChange: UploadProps["onChange"] = async (
  //     info: UploadChangeParam<UploadFile>
  //   ) => {

  //     if (info.file.status === "uploading") {
  //         setLoading(true);
  //       const res = await imageUpload(info.file.originFileObj);
  //       if (res) {
  //         handleAction(res, info.file.originFileObj);
  //       }

  //       return;
  //     }
  //     if (info.file.status === "error") {
  //       setLoading(false);
  //       return;
  //     }
  //     if (info.file.status === "done") {
  //       console.log("ok");
  //       setLoading(false);
  //       return;
  //     }
  //   };

  //   const uploadButton = (
  //     <div>
  //       {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //       <div style={{ marginTop: 8 }}>Upload</div>
  //     </div>
  //   );
  //   const handleAction = async (file: any, obj: any) => {
  //     setValue(name, file);
  //     getBase64(obj as RcFile, (url) => {
  //       setLoading(false);
  //       clearErrors("avatar");
  //       setImageUrl(url);
  //     });
  //   };

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        {/* {imageUrl || loading ? (
          <Image
            src={imageUrl}
            isLoading={loading}
            alt="avatar"
            style={{ width: "200px", height: "200px" }}
            width={200}
            height={200}
          />
        ) : ( */}
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          {(imageUrl || loading) && (
            <Image
              src={imageUrl}
              isLoading={loading}
              alt="avatar"
              className="w-[200px] h-[200px]"
              width={200}
              height={200}
            />
          )}
        </FileUploader>
        {/* )} */}
        {errorMessage && (
          <p className="text-danger text-xs mt-2"> {errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default UploadImage;
