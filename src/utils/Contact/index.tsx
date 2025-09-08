
export interface OfficeLocation {
    title: string;
    companyName: string;
    buildingName?: string;
    address: string[];
    telephone?: string;
  }
  
  export const officeLocations: Record<string, OfficeLocation | OfficeLocation[]> = {
    corporate: {
      title: "CORPORATE OFFICE",
      companyName: "Hofincons Infotech and Industrial Services (A Division of Quess Corp Ltd.)",
      buildingName: "Ahura Centre, B-Wing, 5th Floor,",
      address: [
        "Mahakali Caves Road, Andheri East,",
        "Mumbai, Maharashtra, India 400093"
      ]
    },
    registered: {
      title: "REGISTERED OFFICE",
      companyName: "Quess Corp Limited",
      buildingName: "Quess House,",
      address: [
        "3/3/2 Bellandur Gate, Sarjapur Road, Bengaluru 560103,",
        "Karnataka, India."
      ],
      telephone: "+91 80 6105 6000"
    },
    regional: [
      {
        title: "REGIONAL OFFICE 1",
        companyName: "Hofincons Infotech and Industrial Services (A Division of Quess Corp Ltd.)",
        buildingName: "MDS Group Signature",
        address: [
          "427/1782, 1783, 1804, 38th Cross, 4th Flr, 1st Stage, 5th Block, HBR Layout,",
          "Bengaluru – 560 043, Karnataka, India,"
        ],
        telephone: "080 22185200"
      },
      {
        title: "REGIONAL OFFICE 2",
        companyName: "Hofincons Infotech and Industrial Services (A Division of Quess Corp Ltd.)",
        buildingName: "Signature Tower",
        address: [
          "12/3, 2nd Floor, Marathahalli, Bengaluru 560037,",
          "Karnataka, India."
        ],
        telephone: "080 23346590"
      },
      {
        title: "REGIONAL OFFICE 3",
        companyName: "Hofincons Infotech and Industrial Services (A Division of Quess Corp Ltd.)",
        buildingName: "Tech Park Plaza",
        address: [
          "39/4, 2nd Floor, MG Road, Bengaluru 560001,",
          "Karnataka, India."
        ],
        telephone: "080 27215790"
      }
    ]
  }