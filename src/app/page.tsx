import Image from 'next/image'

export default function Page() {
    return <Image
        src={"/nlv_headshot-cropped-md.jpeg"}
        alt={"NLV Codes Headshot"}
        width={640}
        height={574}
    />
}