# GetCase - React Native E-Ticaret Uygulaması

## Proje Hakkında
Bu proje, modern bir e-ticaret deneyimi sunmayı amaçlayan React Native tabanlı bir mobil uygulamadır. Kullanıcılar ürünleri listeleyebilir, detaylarını görüntüleyebilir ve favori ürünlerini yönetebilir.

## Teknik Özellikler

### 1. Mimari ve Yapı
- TypeScript ile tip güvenliği sağlandı
- Redux Toolkit ile merkezi state yönetimi
- RTK Query ile API entegrasyonu
- Styled Components ile tema desteği
- React Navigation ile sayfa yönetimi
- Redux Persist ile kalıcı veri yönetimi

### 2. Özellikler ve Ekranlar

#### Ana Sayfa (Home Screen)
- FakeStoreAPI entegrasyonu
- Ürün listesi görüntüleme
- Performanslı scroll deneyimi için FlatList kullanımı
- Ürün arama özelliği
- Pull-to-refresh desteği

#### Keşfet Sayfası (Explore Screen)
- Kategori bazlı ürün filtreleme
- Yatay kaydırılabilir kategori listesi
- Seçilen kategoriye göre dinamik ürün listesi
- Smooth geçiş animasyonları

#### Ürün Detay Sayfası
- Detaylı ürün bilgileri (başlık, açıklama, fiyat, kategori)
- Yüksek kaliteli ürün görseli
- Favorilere ekleme/çıkarma özelliği
- Sepete ekleme fonksiyonu

#### Profil Sayfası
- Favori ürünlerin listesi
- AsyncStorage ile kalıcı favori depolama
- Favori ürünlere hızlı erişim

#### Sepet Sayfası
- Sepetteki ürünlerin listesi
- Toplam tutar hesaplama
- Ürün miktarı yönetimi
- Redux Persist ile sepet verilerinin kalıcı saklanması

### 3. UI/UX Özellikleri
- Modern ve minimalist tasarım
- Dark/Light tema desteği
- Custom Bottom Navigation Bar
- Kolay tema değişimi için hızlı geçiş butonu
- Responsive tasarım
- Kullanıcı dostu arayüz
- Smooth animasyonlar ve geçişler

### 4. Performans Optimizasyonları
- useMemo ve useCallback hooks kullanımı
- Gereksiz render'ları önlemek için React.memo implementasyonu
- Lazy loading ve code splitting
- Efficient liste render'ı için FlatList optimizasyonu
- Image caching ve önbellek yönetimi

### 5. State Yönetimi
- Redux Toolkit ile merkezi state yönetimi
- RTK Query ile API cache yönetimi
- AsyncStorage ile kalıcı veri depolama
- Theme Provider ile tema state yönetimi
- Redux Persist ile uygulama verilerinin kalıcı saklanması:
  - Sepet bilgileri
  - Favori ürünler
  - Tema tercihleri
  - Kullanıcı ayarları

### 6. Kod Kalitesi
- ESLint ve Prettier ile kod formatı standardizasyonu
- TypeScript ile tip güvenliği
- Modüler ve tekrar kullanılabilir komponentler
- Clean Code prensipleri
- SOLID prensiplerine uygun yapı

### 7. Güvenlik
- API isteklerinde error handling
- Tip güvenliği ile runtime hatalarının minimize edilmesi
- Güvenli state yönetimi
- Veri validasyonu
- Çevresel değişkenler (.env) yönetimi:
  - API anahtarları
  - Base URL'ler
  - Ortam değişkenleri
  - react-native-config ile güvenli env yönetimi
  - Development/Production ortam ayrımı
  - Hassas bilgilerin güvenli saklanması

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
```bash
git clone [text](https://github.com/terzigolu/case)
```

2. Bağımlılıkları yükleyin:
```bash
yarn install
```

3. Çevresel değişkenleri ayarlayın:
- .env.example dosyasını .env olarak kopyalayın
- Gerekli değişkenleri doldurun:
  ```
  API_URL=https://fakestoreapi.com
  API_TIMEOUT=30000
  ```

4. iOS için pod kurulumu:
```bash
cd ios && pod install
```

5. Uygulamayı başlatın:
```bash
# iOS için
yarn ios

# Android için
yarn android
```

## Geliştirme Notları
- Tüm string'ler Türkçe olarak implement edildi
- Modern React Native best practice'leri takip edildi
- Performans optimizasyonları yapıldı
- Kullanıcı deneyimi ön planda tutuldu
- Kod okunabilirliği ve maintainability gözetildi
- Güvenli veri yönetimi ve API entegrasyonu
- Persist ile veri kalıcılığı sağlandı
