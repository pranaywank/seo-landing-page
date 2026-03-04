export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-10 text-center">
            <div className="max-w-content mx-auto px-6">
                <p className="text-muted-dark text-sm">
                    Built by Wednesday Solutions &middot;{" "}
                    <a
                        href="https://wednesday.is"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-white transition-colors"
                    >
                        wednesday.is
                    </a>
                </p>
            </div>
        </footer>
    );
}
