#!/bin/bash

# Функция для загрузки изображения
download_image() {
  local url=$1
  local filename=$2
  echo "Загружаю $filename..."
  curl -o "public/images/$filename" "$url"
  if [ $? -eq 0 ]; then
    echo "Успешно загружено: $filename"
  else
    echo "Ошибка при загрузке $filename"
  fi
}

# Изображения для Home.js (новости)
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg/800px-Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg" "egypt-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maldives_beach.jpg/800px-Maldives_beach.jpg" "maldives-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Great_Wall_of_China_at_Jinshanling_2016.jpg/800px-Great_Wall_of_China_at_Jinshanling_2016.jpg" "china-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg/800px-Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg" "thailand-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ha_Long_Bay_2017.jpg/800px-Ha_Long_Bay_2017.jpg" "vietnam-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hagia_Sophia_2017.jpg/800px-Hagia_Sophia_2017.jpg" "turkey-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Burj_Al_Arab%2C_Dubai_%281%29.jpg/800px-Burj_Al_Arab%2C_Dubai_%281%29.jpg" "uae-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Charles_Bridge%2C_Prague_%281%29.jpg/800px-Charles_Bridge%2C_Prague_%281%29.jpg" "czechia-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kotor_Bay%2C_Montenegro_%281%29.jpg/800px-Kotor_Bay%2C_Montenegro_%281%29.jpg" "montenegro-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg/800px-Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg" "malaysia-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Maiden_Tower%2C_Baku_%281%29.jpg/800px-Maiden_Tower%2C_Baku_%281%29.jpg" "azerbaijan-news.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tbilisi_Old_Town_%281%29.jpg/800px-Tbilisi_Old_Town_%281%29.jpg" "georgia-news.jpg"

# Изображения для Blog.js (посты в блоге)
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Registan_Square%2C_Samarkand_%281%29.jpg/800px-Registan_Square%2C_Samarkand_%281%29.jpg" "samarkand-blog.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Uzbek_Plovi_%281%29.jpg/800px-Uzbek_Plovi_%281%29.jpg" "uzbek-cuisine.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chimgan_Mountains_%281%29.jpg/800px-Chimgan_Mountains_%281%29.jpg" "chimgan-blog.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kalon_Mosque%2C_Bukhara_%281%29.jpg/800px-Kalon_Mosque%2C_Bukhara_%281%29.jpg" "bukhara-blog.jpg"

# Изображения для About.js (направления)
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg/800px-Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg" "egypt-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maldives_beach.jpg/800px-Maldives_beach.jpg" "maldives-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Great_Wall_of_China_at_Jinshanling_2016.jpg/800px-Great_Wall_of_China_at_Jinshanling_2016.jpg" "china-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg/800px-Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg" "thailand-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ha_Long_Bay_2017.jpg/800px-Ha_Long_Bay_2017.jpg" "vietnam-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hagia_Sophia_2017.jpg/800px-Hagia_Sophia_2017.jpg" "turkey-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Burj_Al_Arab%2C_Dubai_%281%29.jpg/800px-Burj_Al_Arab%2C_Dubai_%281%29.jpg" "uae-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Charles_Bridge%2C_Prague_%281%29.jpg/800px-Charles_Bridge%2C_Prague_%281%29.jpg" "czechia-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kotor_Bay%2C_Montenegro_%281%29.jpg/800px-Kotor_Bay%2C_Montenegro_%281%29.jpg" "montenegro-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg/800px-Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg" "malaysia-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Maiden_Tower%2C_Baku_%281%29.jpg/800px-Maiden_Tower%2C_Baku_%281%29.jpg" "azerbaijan-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tbilisi_Old_Town_%281%29.jpg/800px-Tbilisi_Old_Town_%281%29.jpg" "georgia-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Registan_Square%2C_Samarkand_%281%29.jpg/800px-Registan_Square%2C_Samarkand_%281%29.jpg" "samarkand-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kalon_Mosque%2C_Bukhara_%281%29.jpg/800px-Kalon_Mosque%2C_Bukhara_%281%29.jpg" "bukhara-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Itchan_Kala%2C_Khiva_%281%29.jpg/800px-Itchan_Kala%2C_Khiva_%281%29.jpg" "khiva-about.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Amir_Temur_Square%2C_Tashkent_%281%29.jpg/800px-Amir_Temur_Square%2C_Tashkent_%281%29.jpg" "tashkent-about.jpg"

# Изображения для Reviews.js (отзывы)
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Portrait_of_a_man_001.jpg/800px-Portrait_of_a_man_001.jpg" "review-ali.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Portrait_of_a_woman_001.jpg/800px-Portrait_of_a_woman_001.jpg" "review-zara.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_of_a_man_smiling_001.jpg/800px-Portrait_of_a_man_smiling_001.jpg" "review-jamshid.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Portrait_of_a_woman_smiling_001.jpg/800px-Portrait_of_a_woman_smiling_001.jpg" "review-nodira.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Portrait_of_a_young_woman_001.jpg/800px-Portrait_of_a_young_woman_001.jpg" "review-kamola.jpg"

# Повторяющиеся изображения для отзывов о направлениях
for destination in egypt maldives china thailand vietnam turkey uae czechia montenegro malaysia azerbaijan georgia; do
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Portrait_of_a_man_001.jpg/800px-Portrait_of_a_man_001.jpg" "review-ahmed-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Portrait_of_a_woman_001.jpg/800px-Portrait_of_a_woman_001.jpg" "review-lina-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_of_a_man_smiling_001.jpg/800px-Portrait_of_a_man_smiling_001.jpg" "review-sofia-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Portrait_of_a_woman_smiling_001.jpg/800px-Portrait_of_a_woman_smiling_001.jpg" "review-mark-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Portrait_of_a_young_woman_001.jpg/800px-Portrait_of_a_young_woman_001.jpg" "review-aisha-$destination.jpg"
done

# Изображения для Destinations.js (континенты и направления)
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Asian_culture_traditional_dance.jpg/800px-Asian_culture_traditional_dance.jpg" "asia-1.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eiffel_Tower%2C_Paris_%281%29.jpg/800px-Eiffel_Tower%2C_Paris_%281%29.jpg" "europe-1.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Grand_Canyon_%281%29.jpg/800px-Grand_Canyon_%281%29.jpg" "america-1.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sahara_Desert_%281%29.jpg/800px-Sahara_Desert_%281%29.jpg" "africa-1.jpg"

# Повторяющиеся изображения для направлений
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg/800px-Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg" "egypt-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maldives_beach.jpg/800px-Maldives_beach.jpg" "maldives-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Great_Wall_of_China_at_Jinshanling_2016.jpg/800px-Great_Wall_of_China_at_Jinshanling_2016.jpg" "china-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg/800px-Wat_Phra_Kaew%2C_Bangkok%2C_Thailand_%281%29.jpg" "thailand-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ha_Long_Bay_2017.jpg/800px-Ha_Long_Bay_2017.jpg" "vietnam-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hagia_Sophia_2017.jpg/800px-Hagia_Sophia_2017.jpg" "turkey-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Burj_Al_Arab%2C_Dubai_%281%29.jpg/800px-Burj_Al_Arab%2C_Dubai_%281%29.jpg" "uae-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Charles_Bridge%2C_Prague_%281%29.jpg/800px-Charles_Bridge%2C_Prague_%281%29.jpg" "czechia-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kotor_Bay%2C_Montenegro_%281%29.jpg/800px-Kotor_Bay%2C_Montenegro_%281%29.jpg" "montenegro-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg/800px-Petronas_Towers%2C_Kuala_Lumpur_%281%29.jpg" "malaysia-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Maiden_Tower%2C_Baku_%281%29.jpg/800px-Maiden_Tower%2C_Baku_%281%29.jpg" "azerbaijan-destination.jpg"
download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tbilisi_Old_Town_%281%29.jpg/800px-Tbilisi_Old_Town_%281%29.jpg" "georgia-destination.jpg"

# Изображения для DestinationDetails.js (турпакеты и советы)
for destination in egypt maldives china thailand vietnam turkey uae czechia montenegro malaysia azerbaijan georgia; do
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg/800px-Pyramide_%C3%A0_degr%C3%A9s_%C3%A0_Saqqarah_%281%29.jpg" "$destination-standard-package.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maldives_beach.jpg/800px-Maldives_beach.jpg" "$destination-luxury-package.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ha_Long_Bay_2017.jpg/800px-Ha_Long_Bay_2017.jpg" "$destination-adventure-package.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_document_icon.jpg/800px-Visa_document_icon.jpg" "uzbekistan-$destination-visa.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Luggage_icon.jpg/800px-Luggage_icon.jpg" "uzbekistan-$destination-luggage.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Documents_icon.jpg/800px-Documents_icon.jpg" "uzbekistan-$destination-docs.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Travel_tips_icon.jpg/800px-Travel_tips_icon.jpg" "uzbekistan-tips-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Culture_icon.jpg/800px-Culture_icon.jpg" "uzbekistan-culture-$destination.jpg"
  download_image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Destinations_icon.jpg/800px-Destinations_icon.jpg" "uzbekistan-destinations-$destination.jpg"
done

echo "Загрузка завершена!"

