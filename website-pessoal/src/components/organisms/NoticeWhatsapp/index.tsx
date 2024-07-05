import Image from "next/image"
import Link from "@/components/atoms/SocialMediaButton"
import Eu from 'public/images/Eu.jpg'
import QRCode from 'public/images/QRCodeWhatsapp.jpg'
import "./styles.css"

const NoticeWhatsapp = () => {
    return (
        <div className="bodyNotice">
            <div className="Notice">
                <div className="bgProfile"><Image src={Eu} alt="Foto de perfil" id="Eu" /></div>
                <p>Adler Castro</p>
                <Image src={QRCode} alt="QR Code para o Whatsapp" id="image" />
                <p>Escaneie o QR Code para iniciar uma conversa ou</p>
                <Link id="Link" href="https://wa.me/qr/QIEXF25V76NSL1 " target="_blank">clique aqui</Link>
            </div>
        </div>

    )
}

export default NoticeWhatsapp