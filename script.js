// البيانات الأساسية
        const sectorsData = [
            {name: "صنع منتجات المعادن اللافلزية الأخرى", count: 199, category: "high"},
            {name: "صنع المواد الكيميائية والمنتجات الكيميائية", count: 124, category: "high"},
            {name: "صنع منتجات المعادن المشكلة باستثناء الآلات والمعدات", count: 123, category: "high"},
            {name: "صنع منتجات المطاط واللدائن", count: 109, category: "high"},
            {name: "صنع الفلزات القاعدية", count: 96, category: "high"},
            {name: "إمدادات الكهرباء والغاز والبخار وتكييف الهواء", count: 55, category: "high"},
            {name: "تجارة الجملة والتجزئة وإصلاح المركبات ذات المحركات والدراجات النارية", count: 55, category: "high"},
            {name: "صنع المشروبات", count: 55, category: "high"},
            {name: "التشييد", count: 52, category: "high"},
            {name: "صنع الأثاث", count: 49, category: "medium"},
            {name: "صنع الخشب ومنتجات الخشب والفلين، باستثناء الأثاث", count: 39, category: "medium"},
            {name: "صنع الآلات والمعدات غير مصنفة في موضع أخر", count: 38, category: "medium"},
            {name: "صنع الورق ومنتجات الورق", count: 36, category: "medium"},
            {name: "صنع المعدات الكهربائية", count: 26, category: "medium"},
            {name: "صنع الألياف الاصطناعية", count: 22, category: "medium"},
            {name: "صنع المنسوجات", count: 16, category: "medium"},
            {name: "صنع فحم الكوك والمنتحات النفطية المكررة", count: 15, category: "medium"},
            {name: "إصلاح وتركيب الآلات والمعدات", count: 14, category: "medium"},
            {name: "التعدين واستغلال المحاجر", count: 14, category: "medium"},
            {name: "الطباعة واستنساخ وسائط الإعلام المسجلة", count: 12, category: "medium"},
            {name: "صنع المركبات ذات المحركات والمركبات المقطورة ونصف المقطورة", count: 12, category: "medium"},
            {name: "صنع المواد الصيدلانية والمنتجات الدوائية الكيميائية والنباتية", count: 10, category: "medium"},
            {name: "إمدادات المياه ، وأنشطة الصرف الصحي وإدارة النفايات ومعالجتها", count: 9, category: "small"},
            {name: "النقل والتخزين", count: 6, category: "small"},
            {name: "الزراعة والحراجة وصيد الأسماك", count: 5, category: "small"},
            {name: "الأنشطة العقارية في الممتلكات المملوكة أو المؤجرة", count: 5, category: "small"},
            {name: "صنع المنتجات الجلدية والمنتجات ذات الصلة", count: 5, category: "small"},
            {name: "صنع معدات النقل الأخرى", count: 5, category: "small"},
            {name: "صنع الأدوات والمستلزمات الطبية والتي تستخدم في علاج الأسنان", count: 4, category: "small"},
            {name: "صنع الملبوسات بإستثناء الملبوسات الفرائية", count: 3, category: "small"},
            {name: "الأنشطة المهنية والعلمية والتقنية", count: 1, category: "small"},
            {name: "الاختبارات والتحليلات التقنية", count: 1, category: "small"},
            {name: "أنشطة الخدمات الإدارية وخدمات الدعم", count: 1, category: "small"},
            {name: "صنع المجوهرات والحلي والأصناف المتصلة", count: 1, category: "small"},
            {name: "صيانة وإصلاح الآلات والمعدات", count: 1, category: "small"}
        ];

        const citiesData = [
            {name: "مدينة صحار الصناعية", count: 284, category: "major"},
            {name: "مدينة البريمي الصناعية", count: 217, category: "major"},
            {name: "مدينة الرسيل الصناعية", count: 202, category: "major"},
            {name: "مدينة ريسوت الصناعية", count: 156, category: "major"},
            {name: "مدينة سمائل الصناعية", count: 154, category: "major"},
            {name: "الصناعيات الجديدة", count: 117, category: "major"},
            {name: "ريسوت", count: 106, category: "major"},
            {name: "مدينة نزوى الصناعية", count: 81, category: "medium"},
            {name: "مدينة صور", count: 67, category: "medium"},
            {name: "مدينة ريسوت الصناعية (مدائن)", count: 65, category: "medium"},
            {name: "صلاله", count: 35, category: "medium"},
            {name: "المنطقة الحرة بصلالة", count: 29, category: "medium"},
            {name: "ثمريت", count: 19, category: "small"},
            {name: "مرباط", count: 16, category: "small"},
            {name: "طاقة", count: 14, category: "small"},
            {name: "المنطقة الحرة بالمزيونة", count: 12, category: "small"},
            {name: "مدينة عبري الصناعية", count: 9, category: "small"},
            {name: "مدينة محاس الصناعية", count: 8, category: "small"},
            {name: "السعادة", count: 5, category: "small"},
            {name: "الشويميه", count: 5, category: "small"},
            {name: "المزيونة", count: 5, category: "small"},
            {name: "شليم", count: 4, category: "small"},
            {name: "مدينة الوادي الكبير الصناعية", count: 3, category: "small"},
            {name: "رويه", count: 3, category: "small"},
            {name: "اريقوف", count: 2, category: "small"},
            {name: "السوق المركزي", count: 2, category: "small"},
            {name: "الصناعيات القديمة", count: 2, category: "small"},
            {name: "امل", count: 2, category: "small"},
            {name: "حاسك", count: 2, category: "small"},
            {name: "حنفيت الجنوبي", count: 2, category: "small"},
            {name: "سدح", count: 2, category: "small"},
            {name: "شربثات", count: 2, category: "small"},
            {name: "شمال العوقدين", count: 2, category: "small"},
            {name: "احفور / نيابة طيطام", count: 1, category: "small"},
            {name: "الحصيلة", count: 1, category: "small"},
            {name: "السعادة الجنوبيه", count: 1, category: "small"},
            {name: "المزيونه", count: 1, category: "small"},
            {name: "جبجات", count: 1, category: "small"},
            {name: "جزيرة الحلانيات", count: 1, category: "small"},
            {name: "جوفا-حدبين", count: 1, category: "small"},
            {name: "حقبيت", count: 1, category: "small"},
            {name: "رحل اتين / نيابة غدو", count: 1, category: "small"},
            {name: "صحنوت", count: 1, category: "small"},
            {name: "صلالة الجديدة", count: 1, category: "small"},
            {name: "ضلكوت", count: 1, category: "small"},
            {name: "عوقد", count: 1, category: "small"},
            {name: "قشروب", count: 1, category: "small"},
            {name: "مرمول", count: 1, category: "small"},
            {name: "منجي", count: 1, category: "small"},
            {name: "وادي حريط / نيابة قيرون حيريتي", count: 1, category: "small"},
            {name: "وادي دوكه ( شمال رويه (كساره) )", count: 1, category: "small"}
        ];

        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            // إنشاء الجداول
            createSectorsTable();
            createCitiesTable();
            
            // إنشاء الرسوم البيانية
            createSectorsChart();
            createCitiesChart();
            createTopSectorsChart();
            createTopCitiesChart();
            
            // إضافة مستمعي الأحداث للبحث والتصفية
            setupEventListeners();
            
            // تأثيرات الحركة
            animateElements();
        });

        // إنشاء جدول القطاعات
        function createSectorsTable() {
            const tbody = document.getElementById('sectorsTableBody');
            const totalCompanies = sectorsData.reduce((sum, sector) => sum + sector.count, 0);
            
            sectorsData.forEach((sector, index) => {
                const percentage = ((sector.count / totalCompanies) * 100).toFixed(1);
                const classification = getClassification(sector.count, 'sector');
                const growthIndicator = getGrowthIndicator(sector.count);
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style="text-align: right; font-weight: bold;">${sector.name}</td>
                    <td><span style="background: #4a7c59; color: white; padding: 5px 10px; border-radius: 15px;">${sector.count}</span></td>
                    <td>
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <span style="margin-left: 10px;">${percentage}%</span>
                            <div class="progress-bar" style="width: 100px;">
                                <div class="progress-fill" style="width: ${Math.min(percentage * 2, 100)}%"></div>
                            </div>
                        </div>
                    </td>
                    <td><span class="classification-badge ${sector.category}">${classification}</span></td>
                    <td>${growthIndicator}</td>
                `;
                tbody.appendChild(row);
            });
            
            // إضافة أنماط CSS للتصنيفات
            addClassificationStyles();
        }

        // إنشاء جدول المدن
        function createCitiesTable() {
            const tbody = document.getElementById('citiesTableBody');
            const totalCompanies = citiesData.reduce((sum, city) => sum + city.count, 0);
            
            citiesData.forEach((city, index) => {
                const percentage = ((city.count / totalCompanies) * 100).toFixed(1);
                const classification = getClassification(city.count, 'city');
                const importance = getStrategicImportance(city.count);
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style="text-align: right; font-weight: bold;">${city.name}</td>
                    <td><span style="background: #4a7c59; color: white; padding: 5px 10px; border-radius: 15px;">${city.count}</span></td>
                    <td>
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <span style="margin-left: 10px;">${percentage}%</span>
                            <div class="progress-bar" style="width: 100px;">
                                <div class="progress-fill" style="width: ${Math.min(percentage * 3, 100)}%"></div>
                            </div>
                        </div>
                    </td>
                    <td><span class="classification-badge ${city.category}">${classification}</span></td>
                    <td>${importance}</td>
                `;
                tbody.appendChild(row);
            });
        }

        // إنشاء الرسم البياني للقطاعات
        function createSectorsChart() {
            const ctx = document.getElementById('sectorsChart').getContext('2d');
            const topSectors = sectorsData.slice(0, 10);
            
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: topSectors.map(s => s.name.length > 30 ? s.name.substring(0, 30) + '...' : s.name),
                    datasets: [{
                        data: topSectors.map(s => s.count),
                        backgroundColor: [
                            '#2d5a2d', '#4a7c59', '#5d8b6b', '#70a07d', '#83b58f',
                            '#96caa1', '#a9dfb3', '#bcf4c5', '#8bc34a', '#4caf50'
                        ],
                        borderWidth: 3,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'أكبر 10 قطاعات صناعية في سلطنة عمان',
                            font: { size: 16, weight: 'bold' },
                            color: '#2d5a2d'
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true,
                                font: { size: 12 }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((context.parsed / total) * 100).toFixed(1);
                                    return `${context.label}: ${context.parsed} شركة (${percentage}%)`;
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true,
                        duration: 2000
                    }
                }
            });
        }

        // إنشاء الرسم البياني للمدن
        function createCitiesChart() {
            const ctx = document.getElementById('citiesChart').getContext('2d');
            const topCities = citiesData.slice(0, 15);
            
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: topCities.map(c => c.name.length > 25 ? c.name.substring(0, 25) + '...' : c.name),
                    datasets: [{
                        label: 'عدد الشركات',
                        data: topCities.map(c => c.count),
                        backgroundColor: 'rgba(74, 124, 89, 0.8)',
                        borderColor: '#4a7c59',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {
                        title: {
                            display: true,
                            text: 'أكبر 15 مدينة صناعية في سلطنة عمان',
                            font: { size: 16, weight: 'bold' },
                            color: '#2d5a2d'
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.parsed.x} شركة`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(74, 124, 89, 0.1)'
                            },
                            ticks: {
                                color: '#2d5a2d'
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#2d5a2d',
                                font: { size: 11 }
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        // إنشاء الرسم البياني للقطاعات الرائدة
        function createTopSectorsChart() {
            const ctx = document.getElementById('topSectorsChart').getContext('2d');
            const topSectors = sectorsData.slice(0, 8);
            
            new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: topSectors.map(s => s.name.length > 20 ? s.name.substring(0, 20) + '...' : s.name),
                    datasets: [{
                        data: topSectors.map(s => s.count),
                        backgroundColor: [
                            'rgba(45, 90, 45, 0.8)',
                            'rgba(74, 124, 89, 0.8)',
                            'rgba(93, 139, 107, 0.8)',
                            'rgba(112, 160, 125, 0.8)',
                            'rgba(131, 181, 143, 0.8)',
                            'rgba(150, 202, 161, 0.8)',
                            'rgba(169, 223, 179, 0.8)',
                            'rgba(188, 244, 197, 0.8)'
                        ],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'القطاعات الصناعية الرائدة',
                            font: { size: 16, weight: 'bold' },
                            color: '#2d5a2d'
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true,
                                font: { size: 10 }
                            }
                        }
                    },
                    scales: {
                        r: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(74, 124, 89, 0.2)'
                            },
                            ticks: {
                                color: '#2d5a2d'
                            }
                        }
                    },
                    animation: {
                        duration: 2500
                    }
                }
            });
        }

        // إنشاء الرسم البياني للمدن الرائدة
        function createTopCitiesChart() {
            const ctx = document.getElementById('topCitiesChart').getContext('2d');
            const topCities = citiesData.slice(0, 8);
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: topCities.map(c => c.name.length > 15 ? c.name.substring(0, 15) + '...' : c.name),
                    datasets: [{
                        label: 'عدد الشركات',
                        data: topCities.map(c => c.count),
                        borderColor: '#4a7c59',
                        backgroundColor: 'rgba(74, 124, 89, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#2d5a2d',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'المدن الصناعية الرائدة',
                            font: { size: 16, weight: 'bold' },
                            color: '#2d5a2d'
                        },
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(74, 124, 89, 0.1)'
                            },
                            ticks: {
                                color: '#2d5a2d'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#2d5a2d',
                                maxRotation: 45
                            }
                        }
                    },
                    animation: {
                        duration: 2000
                    }
                }
            });
        }

        // إعداد مستمعي الأحداث
        function setupEventListeners() {
            // البحث في القطاعات
            document.getElementById('sectorSearch').addEventListener('input', function(e) {
                filterTable('sectorsTable', e.target.value, 0);
            });

            // تصفية القطاعات
            document.getElementById('sectorFilter').addEventListener('change', function(e) {
                filterTableByCategory('sectorsTable', e.target.value, 'sector');
            });

            // البحث في المدن
            document.getElementById('citySearch').addEventListener('input', function(e) {
                filterTable('citiesTable', e.target.value, 0);
            });

            // تصفية المدن
            document.getElementById('cityFilter').addEventListener('change', function(e) {
                filterTableByCategory('citiesTable', e.target.value, 'city');
            });
        }

        // تصفية الجدول بالنص
        function filterTable(tableId, searchTerm, columnIndex) {
            const table = document.getElementById(tableId);
            const rows = table.getElementsByTagName('tr');
            
            for (let i = 1; i < rows.length; i++) {
                const cell = rows[i].getElementsByTagName('td')[columnIndex];
                if (cell) {
                    const textValue = cell.textContent || cell.innerText;
                    rows[i].style.display = textValue.includes(searchTerm) ? '' : 'none';
                }
            }
        }

        // تصفية الجدول بالفئة
        function filterTableByCategory(tableId, category, type) {
            const table = document.getElementById(tableId);
            const rows = table.getElementsByTagName('tr');
            const data = type === 'sector' ? sectorsData : citiesData;
            
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const name = row.getElementsByTagName('td')[0].textContent;
                const item = data.find(d => d.name === name);
                
                if (!category) {
                    row.style.display = '';
                } else if (type === 'sector') {
                    if (category === 'high' && item.count >= 50) row.style.display = '';
                    else if (category === 'medium' && item.count >= 10 && item.count < 50) row.style.display = '';
                    else if (category === 'small' && item.count < 10) row.style.display = '';
                    else row.style.display = 'none';
                } else if (type === 'city') {
                    if (category === 'major' && item.count >= 100) row.style.display = '';
                    else if (category === 'medium' && item.count >= 20 && item.count < 100) row.style.display = '';
                    else if (category === 'small' && item.count < 20) row.style.display = '';
                    else row.style.display = 'none';
                }
            }
        }

        // إعادة تعيين مرشحات القطاعات
        function resetSectorFilters() {
            document.getElementById('sectorSearch').value = '';
            document.getElementById('sectorFilter').value = '';
            const rows = document.getElementById('sectorsTable').getElementsByTagName('tr');
            for (let i = 1; i < rows.length; i++) {
                rows[i].style.display = '';
            }
        }

        // إعادة تعيين مرشحات المدن
        function resetCityFilters() {
            document.getElementById('citySearch').value = '';
            document.getElementById('cityFilter').value = '';
            const rows = document.getElementById('citiesTable').getElementsByTagName('tr');
            for (let i = 1; i < rows.length; i++) {
                rows[i].style.display = '';
            }
        }

        // الحصول على التصنيف
        function getClassification(count, type) {
            if (type === 'sector') {
                if (count >= 50) return 'قطاع كبير';
                if (count >= 10) return 'قطاع متوسط';
                return 'قطاع صغير';
            } else {
                if (count >= 100) return 'مدينة كبرى';
                if (count >= 20) return 'مدينة متوسطة';
                return 'مدينة صغيرة';
            }
        }

        // الحصول على مؤشر النمو
        function getGrowthIndicator(count) {
            if (count >= 100) return '📈 نمو عالي';
            if (count >= 50) return '📊 نمو متوسط';
            if (count >= 20) return '📉 نمو منخفض';
            return '⚠️ يحتاج دعم';
        }

        // الحصول على الأهمية الإستراتيجية
        function getStrategicImportance(count) {
            if (count >= 200) return '🏆 أهمية قصوى';
            if (count >= 100) return '⭐ أهمية عالية';
            if (count >= 50) return '💫 أهمية متوسطة';
            return '🔹 أهمية محدودة';
        }

        // إضافة أنماط التصنيف
        function addClassificationStyles() {
            const style = document.createElement('style');
            style.textContent = `
                .classification-badge {
                    padding: 5px 12px;
                    border-radius: 15px;
                    font-size: 0.85em;
                    font-weight: bold;
                    color: white;
                }
                .high, .major { background: linear-gradient(135deg, #2d5a2d, #4a7c59); }
                .medium { background: linear-gradient(135deg, #4a7c59, #5d8b6b); }
                .small { background: linear-gradient(135deg, #70a07d, #83b58f); }
            `;
            document.head.appendChild(style);
        }

        // تحريك العناصر
        function animateElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });

            document.querySelectorAll('.section, .stats-card, .insights').forEach(el => {
                observer.observe(el);
            });
        }

        // تحميل PDF
        function downloadPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            
            // إعداد الخط العربي
            doc.setFont('Arial', 'normal');
            
            // العنوان الرئيسي
            doc.setFontSize(18);
            doc.text('تقرير تحليل الشركات الصناعية في سلطنة عمان', 105, 20, { align: 'center' });
            
            // المعلومات الأساسية
            doc.setFontSize(12);
            doc.text('تاريخ التقرير: يونيو 2025', 20, 40);
            doc.text('إجمالي الشركات: 1,652 شركة', 20, 50);
            doc.text('عدد القطاعات: 32 قطاع', 20, 60);
            doc.text('عدد المدن الصناعية: 45 مدينة', 20, 70);
            
            // الملخص التنفيذي
            doc.setFontSize(14);
            doc.text('الملخص التنفيذي:', 20, 90);
            doc.setFontSize(10);
            const summary = 'يشهد القطاع الصناعي في سلطنة عمان نمواً مستداماً ومتنوعاً، حيث يضم 1,652 شركة صناعية موزعة عبر 45 موقعاً جغرافياً و32 قطاعاً صناعياً مختلفاً.';
            const lines = doc.splitTextToSize(summary, 170);
            doc.text(lines, 20, 100);
            
            // أهم القطاعات
            doc.setFontSize(14);
            doc.text('أهم القطاعات الصناعية:', 20, 130);
            doc.setFontSize(10);
            
            let yPos = 140;
            sectorsData.slice(0, 10).forEach((sector, index) => {
                const text = `${index + 1}. ${sector.name}: ${sector.count} شركة`;
                const textLines = doc.splitTextToSize(text, 170);
                doc.text(textLines, 20, yPos);
                yPos += textLines.length * 5 + 2;
            });
            
            // صفحة جديدة للمدن
            doc.addPage();
            doc.setFontSize(14);
            doc.text('أهم المدن الصناعية:', 20, 20);
            doc.setFontSize(10);
            
            yPos = 30;
            citiesData.slice(0, 15).forEach((city, index) => {
                const text = `${index + 1}. ${city.name}: ${city.count} شركة`;
                const textLines = doc.splitTextToSize(text, 170);
                doc.text(textLines, 20, yPos);
                yPos += textLines.length * 5 + 2;
            });
            
            // التوصيات
            doc.addPage();
            doc.setFontSize(14);
            doc.text('التوصيات الاستراتيجية:', 20, 20);
            doc.setFontSize(10);
            
            const recommendations = [
                'تطوير القطاعات التقنية والرقمية',
                'دعم الصناعات الصغيرة والمتوسطة',
                'تنويع المواقع الجغرافية للصناعات',
                'الاستثمار في الصناعات المتقدمة',
                'تعزيز الربط بين المدن الصناعية'
            ];
            
            yPos = 30;
            recommendations.forEach((rec, index) => {
                doc.text(`${index + 1}. ${rec}`, 20, yPos);
                yPos += 10;
            });
            
            
            
        }