
import type { technologyType } from '../../type';

interface YourStackProps {
    stack: technologyType[];
    onRemove: (id: string) => void;
    onClear: () => void;
}

const YourStack = ({ stack, onRemove, onClear }: YourStackProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 w-full">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
                <p className="text-xs text-gray-400 mt-1">
                    {stack.length === 0
                        ? 'No technologies selected yet.'
                        : `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
                </p>
            </div>

            {/* Content */}
            {stack.length === 0 ? (
                /* Empty State */
                <div className="mt-5 border border-dashed border-gray-200 rounded-xl py-9 px-4 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Your stack is empty.</span>
                </div>
            ) : (
                /* Selected Items List */
                <div className="mt-4 space-y-3">
                    {stack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-6 h-6 object-contain"
                                />
                                <div>
                                    <h4 className="text-xs font-bold text-gray-900 leading-tight">
                                        {item.name}
                                    </h4>
                                    <span className="text-[10px] text-gray-400 capitalize">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Remove single item button */}
                            <button
                                type="button"
                                onClick={() => onRemove(item.id)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                aria-label={`Remove ${item.name}`}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}

                    {/* Remove All Button */}
                    <button
                        type="button"
                        onClick={onClear}
                        className="w-full mt-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 active:bg-red-100 rounded-xl font-medium text-xs transition-colors"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default YourStack;