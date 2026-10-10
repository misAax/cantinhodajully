import Image from "next/image";
import { pageConfig } from "../app/config";

export default function CreatorProfile() {
  return (
    <div className="creator-profile">
      <div className="creator-avatar">
        <Image
          alt={`Foto de perfil de ${pageConfig.creatorName}`}
          className="creator-avatar-image"
          fill
          priority
          sizes="(max-width: 640px) 88px, 104px"
          src={pageConfig.creatorPhoto}
          style={{ objectPosition: pageConfig.creatorPhotoPosition }}
        />
      </div>
      <span className="creator-profile-name">{pageConfig.creatorName}</span>
    </div>
  );
}
