import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import FAQItem from "./components/FAQItem";
import Header from "../../components/Header";


const faqData = [
  {
    question: "Cihazım çalışmıyor, ne yapmalıyım?",
    answer: "Cihazınız açılmıyorsa şarj cihazını kontrol edin ve en az 30 dakika şarjda bekletin. Sorun devam ederse teknik servise başvurun.",
  },
  {
    question: "Cihaz garanti süresi ne kadardır?",
    answer: "Wiky Watch cihazları 2 yıl resmi distribütör garantisi altındadır.",
  },
  {
    question: "Servis kaydı nasıl oluşturabilirim?",
    answer: "Web sitemizdeki 'Servis Talep Formu'nu doldurarak servis kaydı oluşturabilirsiniz.",
  },
  {
    question: "IMEI numaramı nasıl öğrenebilirim?",
    answer: "Cihaz kapalıyken arka kapağı açarak veya cihaz ayarlarında 'Hakkında' bölümünden IMEI numarasını öğrenebilirsiniz.",
  },
  {
    question: "Cihazın sıfırlanması gerekiyor, nasıl yapabilirim?",
    answer: "Ayarlar menüsünden 'Fabrika Ayarlarına Sıfırla' seçeneğini kullanabilirsiniz. Gerekirse teknik destek alınız.",
  },
  {
    question: "Saat GPS konumunu yanlış gösteriyor, ne yapmalıyım?",
    answer: "Açık alanda 5-10 dakika bekleyin. Konum hala hatalıysa cihazı sıfırlayıp tekrar deneyin.",
  },
  {
    question: "Cihazım serviste ne kadar kalır?",
    answer: "Servis süresi ortalama 7-10 iş günüdür. Yoğunluğa bağlı olarak değişebilir.",
  },
  {
    question: "Servis durumumu nasıl öğrenebilirim?",
    answer: "Servis numaranızla web sitemiz üzerinden 'Servis Durum Sorgulama' bölümünden takip edebilirsiniz.",
  },
  {
    question: "Cihazımın garantisi bitti, yine de servis alabilir miyim?",
    answer: "Evet, garanti süresi dışındaki cihazlar için ücretli servis hizmeti verilmektedir.",
  },
  {
    question: "Suya dayanıklılık garantisi var mı?",
    answer: "Wiky Watch modelleri su sıçramalarına karşı dayanıklıdır ancak tam su geçirmezlik garantisi verilmemektedir.",
  },
  {
    question: "Batarya ömrü ne kadar?",
    answer: "Normal kullanımda batarya 1-2 gün arası dayanır. Pil performansı zamanla azalabilir.",
  },
  {
    question: "Saatte sesli arama çalışmıyor, neden?",
    answer: "SIM kartın aktif olduğundan ve doğru yerleştirildiğinden emin olun. Sorun devam ederse ayarları kontrol edin veya destek alın.",
  },
  {
    question: "Servise gönderdiğim cihaz geri nasıl gönderilir?",
    answer: "Cihaz, onarım sonrası kargo ile kayıtlı adresinize ücretsiz olarak gönderilir.",
  },
  {
    question: "Servis formu doldururken hangi belgeler gerekli?",
    answer: "Cihazın IMEI numarası, fatura bilgileri ve şikayet detayları gereklidir.",
  },
  {
    question: "Servis ücreti neye göre belirleniyor?",
    answer: "Garanti dışı onarımlarda, arızanın türüne göre fiyatlandırma yapılmaktadır.",
  },
  {
    question: "Saat uygulaması telefonumla uyumlu değil, ne yapmalıyım?",
    answer: "Uygulamanın en güncel sürümünü indirip kurduğunuzdan emin olun. Uyumsuzluk devam ederse destek ekibiyle iletişime geçin.",
  },
  {
    question: "Cihazımın yazılım güncellemesi nasıl yapılır?",
    answer: "Yazılım güncellemeleri internet üzerinden otomatik yapılır. Gerekirse teknik destekten yardım alabilirsiniz.",
  },
  {
    question: "Saat şarj olmuyor, ne yapmalıyım?",
    answer: "Farklı bir şarj kablosu ve adaptör deneyin. Sorun devam ederse teknik servise başvurun.",
  },
  {
    question: "Servise gönderilen cihazda veri kaybı olur mu?",
    answer: "Evet, onarım sırasında cihaz fabrika ayarlarına dönebilir. Önemli verileri yedeklemeniz önerilir.",
  },
  {
    question: "Cihazın garanti kapsamına neler giriyor?",
    answer: "Üretim kaynaklı donanımsal arızalar garanti kapsamındadır. Kullanıcı hataları (kırık, sıvı teması vb.) kapsam dışıdır.",
  },
];


export default function FaqScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Header
        title="Sıkça Sorulan Sorular"
        subtitle="Merak Ettiğiniz Konular Hakkında Sıkça Sorulan Sorulara Aşağıdan Ulaşabilirsiniz."
      />

      <View style={styles.faqList}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </View>
    </ScrollView>
  );
}
