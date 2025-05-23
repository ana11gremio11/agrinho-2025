document.addEventListener('DOMContentLoaded', () => {
    const techInfoBox = document.getElementById('tech-info');
    const btnDrones = document.getElementById('btn-drones');
    const btnSensores = document.getElementById('btn-sensores');
    const btnIa = document.getElementById('btn-ia');
  
    const techContent = {
      drones: `
        <p><strong>Drones:</strong> Utilizados para mapeamento de lavouras, monitoramento de pragas e doenças, aplicação precisa de defensivos e análise de saúde das plantas, otimizando o uso de recursos e aumentando a produtividade.</p>
      `,
      sensores: `
        <p><strong>Sensores e IoT (Internet das Coisas):</strong> Coletam dados em tempo real sobre solo, clima, umidade e saúde animal. Permitem decisões mais informadas sobre irrigação, nutrição e manejo do gado, reduzindo desperdícios.</p>
      `,
      ia: `
        <p><strong>Inteligência Artificial:</strong> Analisa grandes volumes de dados (big data) para prever safras, otimizar rotas logísticas, automatizar equipamentos, identificar padrões de mercado e auxiliar na tomada de decisões estratégicas.</p>
      `
    };
  
    function updateTechInfo(technology) {
      techInfoBox.innerHTML = techContent[technology];
      // Optional: Add a subtle animation when content changes
      techInfoBox.style.transform = 'scale(0.95)';
      techInfoBox.style.opacity = '0';
      setTimeout(() => {
        techInfoBox.style.transform = 'scale(1)';
        techInfoBox.style.opacity = '1';
      }, 100);
    }
  
    btnDrones.addEventListener('click', () => updateTechInfo('drones'));
    btnSensores.addEventListener('click', () => updateTechInfo('sensores'));
    btnIa.addEventListener('click', () => updateTechInfo('ia'));
  });