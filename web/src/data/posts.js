import baby from "../assets/baby.png"
import pregnantWomanTakingPictures from "../assets/pregnant-woman-taking-pictures-of-ultrasound-PKK8Q2H.png";
import motherAndDaughter from "../assets/mother-and-daughter-PP4C798.png";
import milupa from "../assets/5a2ddc0878bf9f3aa0bfb3c778fcd0fd.png";
import milupaProfile from "../assets/milupa-pp.png";
import drAhmetYildizKenter from "../assets/dr_ahmet_yilmaz.png";
import deryaDeniz from "../assets/derya_deniz.png";


const posts = [
    {
        id: 1,
        liked: 3,
        shared: 1,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: baby,
        description: "Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Ahmet Yıldız Kenter",
            title: "Medical Doctor",
            profilePhoto: drAhmetYildizKenter
        }
    },
    {
        id: 2,
        liked: 24,
        shared: 0,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: pregnantWomanTakingPictures,
        description: "The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Derya Deniz",
            title: null,
            profilePhoto: deryaDeniz
        }
    },
    {
        id: 3,
        liked: 1,
        shared: 0,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: null,
        description: "The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Dr. Ahmet Yıldız Kenter",
            title: "Medical Doctor",
            profilePhoto: drAhmetYildizKenter
        }
    },
    {
        id: 4,
        liked: 3,
        shared: 1,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: motherAndDaughter,
        description: "Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Dr. Ahmet Yıldız Kenter",
            title: "Medical Doctor",
            profilePhoto: drAhmetYildizKenter
        }
    },
    {
        id: 5,
        liked: 3,
        shared: 1,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: milupa,
        description: "Normal healthy 21 y/o patient came in presenting odd symptoms. Patient described a new set of symptoms they all get well...",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Milupa",
            title: "SPONSORED",
            profilePhoto: milupaProfile
        }
    },
    {
        id: 6,
        liked: 3,
        shared: 1,
        publishedMinAgo: 2,
        views: 4,
        comments: 5,
        captionPhoto: motherAndDaughter,
        description: "Maecenas pulvinar nulla eu nibh imperdiet, et ullamcorper metus interdum. Duis vehicula quam non tempor viverra. Quisque sit amet commodo sem. Quisque eu cursus libero. Suspendisse cursus magna dui, id condimentum mi rutrum ac. Sed eget orci at tortor iaculis pretium. Duis in feugiat odio, a faucibus nisi. Maecenas et sollicitudin ipsum, porta accumsan dui. Maecenas malesuada suscipit ligula vitae dignissim. Curabitur eu lacinia enim. Fusce lectus lorem, ultrices ut arcu sed, gravida elementum lectus. Ut lobortis ullamcorper neque, et faucibus sem pellentesque ac.",
        tags: ["child", "doctor", "hospital", "fever"],
        user: {
            name: "Dr. Ahmet Yıldız Kenter",
            title: "Medical Doctor",
            profilePhoto: drAhmetYildizKenter
        }
    }
    
]

export default posts;